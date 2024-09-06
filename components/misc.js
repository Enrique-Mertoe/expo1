import {Animated, Image, Pressable, TextInput, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {HFrame} from "./frames";
import style from "../src/theme/AppTheme";
import {getSupabaseFileUrl} from "../src/lib/supabase";


const Avatar = ({src, size = 44, ...props}) => {
    let [source,setSource] = useState();


    return (
        <Pressable style={[AvatarStyle.container, {height: size, width: size}, AvatarStyle.circle(size)]}
                   {...props}
        >
            <Image transition={100} source={Avatar.loadSource(src)} style={[AvatarStyle.img, AvatarStyle.circle(size)]}/>
        </Pressable>
    )
}

Avatar.loadSource = path => {
    if (path)
        return {uri: String(path).startsWith("avatarImage") ?getSupabaseFileUrl(path) : path}
    return require("../assets/placeholder.jpg")
}

const AvatarStyle = {
    container: {
        position: 'relative',
        display: 'flex',
        borderRadius: 50,
        height: 44,
        width: 44,
        cursor: 'pointer',
        userSelect: 'none',
        overflow: 'hidden',
        borderWidth: 2,
        borderColor:"#BA68C8"
    },
    circle: (size) => {
        return {borderRadius: size / 2}
    },
    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    text: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 22,
        position: 'absolute',
        top: 0,
        left: 0,
    }
}


const Hr = ({style}) => {
    return (<View
        style={{
            borderTopColor: "rgba(0,0,0,0.2)",
            borderTopWidth: 1,
            width: "100%",
            marginVertical: 8,
        }}
        {...style}
    />)
};
const TextArea = ({style, onInput, ...props}) => {
    const [text, setText] = useState('');
    const handleTextChange = (inputText) => {
        setText(inputText);
        if (onInput) {
            onInput ? onInput(inputText) : null;
        }
    };
    const handleReset = (val) => {
        if (!val) {
            setText(null);
        }
    };

    if (props.reset)
        React.useEffect(() => {
            handleReset(props.reset())
        }, [props.reset()]);


    return (
        <View>
            <TextInput
                style={[styles.textInput, style]}
                multiline
                numberOfLines={props.lines || 10}

                onChangeText={handleTextChange}
                value={text}
                placeholder={props.placeholder || "Enter your text here..."}
            />
        </View>
    );
};

const styles = {
    container: {
        padding: 10,
    },
    textInput: {
        outline: "none",

        height: "auto",
        borderRadius: 4,
        padding: 10,
        textAlignVertical: 'top',
    },
};


const ScaleAnimation = ({children}) => {
    const scaleAnim = useRef(new Animated.Value(0.5)).current;

    Animated.sequence([
        Animated.timing(scaleAnim, {
            toValue: 1.2,
            duration: 150,
            useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
        }),
    ]).start();

    return (
        <Animated.View style={[{transform: [{scale: scaleAnim}]}]}>
            {
                children
            }
        </Animated.View>
    );
};

const TabManager = ({children, style, tab_listener}) => {
    let chs = [];
    children.forEach((child, index) => {
        chs[index] = (

            <Pressable onPress={event => {
                event.stopPropagation();
                tab_listener && (_ => tab_listener(index))();
            }}>
                {child}
            </Pressable>
        );
    });
    return (
        <HFrame style={[style]}>
            {chs}
        </HFrame>
    )
}
const ViewPager = ({children, activeTab = 0, defaultTab = 0, onChange = _ => _}) => {
    !children.length && (_ => children = [children])()
    let chs = [];
    children.forEach((child, index) => {
        chs[index] = (
            <View style={[style.viewPagerItem, style.viewPagerItemActive]}>
                {child}
            </View>
        );
    });
    return (<View style={[style.viewPager]}>
        {chs}
    </View>)
}
const ViewPagerItem = ({children, onCreate, onPause}) => {


    return (<View style={style.viewPagerItem}>
        {children}
    </View>);
}

export {Avatar, Hr, TextArea, ScaleAnimation, TabManager, ViewPager, ViewPagerItem}