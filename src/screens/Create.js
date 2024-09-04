import {useAuth} from "../context/authContext";
import {SafeAreaView} from "react-native-safe-area-context";
import commonStyles from "../theme/AppTheme";
import {HFrame, VFrame} from "../../components/frames";
import Header from "../../components/homeComponents";
import React, {useState} from "react";
import {Alert, Image, Text, View} from "react-native";
import {Avatar, TextArea} from "../../components/misc";
import style from "../theme/AppTheme";
import {Button, ButtonIcon} from "../../components/button";
import Icon from "../../components/Icons";
import * as ImagePicker from 'expo-image-picker'
import {getSupabaseFileUrl} from "../lib/supabase";
import {createOrUpdatePost} from "../services/postService";

const CreateScreen = ({navigation}) => {
    const {user} = useAuth(),
        [file, setFile] = useState(file),
        [loading, setLoading] = useState(false),
        [posting, setPosting] = useState(false),
        [status, setStatus] = useState('');
    const reset = _ => {
        setFile(null);
        setStatus(null);
    }

    const onSubmit = async () => {
        let data = {
            file, body: status, userId: user?.id
        }
        setPosting(true);
        let res = await createOrUpdatePost(data);
        setPosting(false);
        if (res.success) {
            reset();
            navigation.goBack();
        } else {
            Alert.alert("post", res.msg)
        }
    }

    const onPick = async () => {
            setLoading(true)
            let results = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: .7,
                aspect: [4, 3]
            })
            if (!results.canceled) {
                setFile(results.assets[0]);
            }
            setLoading(false)
        },
        isLocal = file => {
            return file && typeof file === "object"
        },
        getFileType = file => {
            if (file && isLocal(file)) {
                return file.type;
            }
        };
    const getFileUri = file => (isLocal(file) ? file.uri : null);
    return (
        <SafeAreaView style={commonStyles.layout}>
            <VFrame>
                <VFrame style={[style.borderBottom]}>
                    <HFrame gap={10} style={[style.px2, style.py1, style.borderBottom]}>
                        <View>
                            <Avatar size={65}/>
                        </View>
                        <Text style={[style.h2]}>
                            {user.name}
                        </Text>
                        <View style={{marginStart: "auto"}}>
                            <ButtonIcon
                                type={"rounded"} size={44}
                                icon={<Icon name="close"/>}
                                onClick={_ => navigation.goBack()}
                                style={[{backgroundColor:"rgba(0,0,0,0.4)",shadowColor: "transparent"}]}
                            />
                        </View>
                    </HFrame>
                    <TextArea onInput={setStatus} style={[style.h2, {maxHeight: "auto"}]} reset ={_=>status}/>
                    {
                        file &&
                        (<View style={[style.px2]}>
                                <Image source={{uri: getFileUri(file)}} resizeMode="cover" style={[style.imgPreview]}/>
                            </View>
                        )

                    }

                </VFrame>
                <HFrame gap={4} style={[style.px1, style.py1]}>
                    <View style={[style.weight1]}>
                        <Button
                            icon={<Icon name="image" size={16}/>}
                            text="Select File" style={[{borderRadius: 2}, style.py1]}
                            loading={loading}
                            onClick={onPick}
                        />
                    </View>
                    <View style={[style.weight1]}>
                        <Button
                            onClick={onSubmit}
                            text="Post"
                            loading={posting}
                            style={[{borderRadius: 2, fontWeight: 700}, style.py1]}/>
                    </View>
                </HFrame>
            </VFrame>
        </SafeAreaView>
    );
};

export default CreateScreen;
