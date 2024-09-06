// src/screens/HomeScreen.js
import React, {useEffect, useRef, useState} from 'react';
import {Alert, Text, TextInput, View} from 'react-native';
import {useAuth} from '../context/authContext';
import commonStyles from '../theme/AppTheme';
import {SafeAreaView} from "react-native-safe-area-context";
import {VFrame, HFrame} from "../../components/frames"
import style from "../theme/AppTheme";
import {Avatar, Hr} from "../../components/misc";
import {Button, ButtonIcon} from "../../components/button";
import Icon from "../../components/Icons";
import {TouchableRipple} from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import {createOrUpdatePost} from "../services/postService";
import {updateUserData} from "../services/userService";

const ProfileScreen = ({navigation}) => {
    const {logout, user} = useAuth(),
        [file, setFile] = useState(user?.image || file),
        [loading, setLoading] = useState(),
        [pickLoading, setPickLoading] = useState(false);
    let emailRef = useRef(user.email),
        nameRef = useRef(user.name),
        [disabled, setDisabled] = useState(true)
    const onPick = async () => {
            setPickLoading(true)
            let results = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: .7,
                aspect: [4, 4]
            })
            if (!results.canceled) {
                setFile(results.assets[0]);
            }
            setPickLoading(false)
        },
        isLocal = file => {
            return file && typeof file === "object"
        },
        getFileUri = _ => (isLocal(file) ? file.uri:file),
        onSubmit = async () => {
            let image = file, data = {
                image, name: nameRef.current.trim(), email: emailRef.current?.trim()
            }
            setLoading(true);
            let res = await updateUserData(user?.id,data);
            setLoading(false);
            if (res.success) {
                Alert.alert("profile", "saved changes")
            } else {
                Alert.alert("post", res.msg)
            }
        };
    return (
        <SafeAreaView style={[commonStyles.layout, {backgroundColor: "#fff"}]}>
            <VFrame gap={4} style={[style.centerHorizontal, {marginTop: 20}]}>
                <View>
                    <Avatar src={
                        getFileUri()
                    } size={200}/>
                    <ButtonIcon
                        style={[style.avatarIcon, {backgroundColor: "rgba(0,0,0,0.5)"}]}
                        hasShadow={false}
                        type={"rounded"}
                        size={54}
                        onClick={onPick}
                        loading={pickLoading}
                        icon={<Icon name={"camera"}/>}
                    />
                </View>
                <Text
                    style={[style.h1]}>{user?.name}</Text>
                <Text style={[style.h6]}>{user.email || "add email"}</Text>
                <Hr style={{marginVertical: 0}}/>
                <HFrame gap={20} style={[style.centerVertivcal]}>
                    <TouchableRipple>
                        <HFrame>
                            <ButtonIcon
                                type={"rounded"}
                                icon={<Icon name={"cog"}/>}
                            />
                            <Text>Settings</Text>
                        </HFrame>
                    </TouchableRipple>
                    <TouchableRipple
                        onPress={logout}
                    >
                        <HFrame>
                            <ButtonIcon
                                type={"rounded"}
                                icon={<Icon name={"power"}/>}
                            />
                            <Text>Logout</Text>
                        </HFrame>
                    </TouchableRipple>
                </HFrame>
                <Hr style={{marginVertical: 0}}/>
                <VFrame gap={5} style={[style.px2]}>
                    <TextInput
                        onChangeText={val => nameRef.current = val}
                        defaultValue={nameRef.current}
                        style={[style.input]}/>
                    <TextInput
                        onChangeText={val => emailRef.current = val}

                        style={[style.input]} defaultValue={emailRef.current || "No email"}/>
                    <TextInput style={[style.input]} defaultValue={"no bio"}/>
                    <TextInput style={[style.input]} defaultValue={"No phone number"}/>
                    <View style={{marginTop: 10}}>
                        <Button
                            loading={loading}
                            onClick={onSubmit}
                            text={"Save changes"}/>
                    </View>
                </VFrame>
            </VFrame>
        </SafeAreaView>
    );
};

export default ProfileScreen;
