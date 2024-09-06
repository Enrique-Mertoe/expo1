import {Pressable, Text, ActivityIndicator, View, TouchableOpacity} from 'react-native';
import styles from '../src/theme/AppTheme'
import {HFrame} from "./frames";
import {TouchableRipple} from "react-native-paper";

const Loading = ({size = "large", color = ""}) => {
    return (
        <ActivityIndicator size={size} color={color}/>
    )
}


const Button = ({
                    text = "",
                    onClick = () => {
                    },
                    loading = false,
                    style = {},
                    icon,
                    hasShadow = true,
                    background,
                    color,
                    padding,
                    disabled

                }) => {
    let shadow = {
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    }
    if (loading) return (<View style={[styles.button]}>
        <Loading color={color || "#fff"}/>
    </View>);
    let Icon = icon ? (<View>
        {icon}
    </View>) : null;

    return (
        <View style={[styles.button,
            {
                overflow: "hidden",
                paddingVertical: 0,
                paddingHorizontal: 0,
                backgroundColor: background || styles.button.backgroundColor
                ,
                opacity: disabled ? .2 : 1
            }
            , hasShadow ? shadow : null,
        ]}>
            <TouchableRipple
                style={[style]}
                onPress={!disabled ? onClick : _ => {
                }}>
                <View>
                    <HFrame gap={10} style={[
                        {
                            backgroundColor: "red",
                            justifyContent: "center",
                            width: "100%",
                        },
                        styles.button,
                        {backgroundColor: "transparent"}
                    ]}>
                        {Icon}
                        <Text style={[{
                            fontSize: style.fontSize || 24,
                            color: color || "#fff",
                            fontWeight: style.fontWeight || 500,
                            lineHeight: 34
                        }]}>{text}</Text>
                    </HFrame>
                </View>
            </TouchableRipple>
        </View>
    )
}
const ButtonIcon = ({
                        type,
                        onClick,
                        loading = false,
                        style = {},
                        icon,
                        hasShadow,
                        ...props
                    }) => {
    style.padding = 24;
    let shadow = {
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    }

    let bt = {
        alignItems: "center",
        justifyContent: "center"
    }
    props.size = props.size || 44;
    bt.height = bt.width = props.size
    if (type && type === "rounded") {
        bt.borderRadius = props.size / 2

    }


    if (loading) return (<View
        style={[styles.button, {
            paddingHorizontal: 0,
            paddingVertical: 0,
            overflow: "hidden"
        }, hasShadow ? shadow : null, bt, style]}>
        <TouchableRipple style={[styles.button, styles, {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent"
        }]}>
            <Loading color={"#fff"}/>
        </TouchableRipple>
    </View>);

    let options = {};
    onClick && (_=> {
        options.onPress = onClick;
    })();
    return (
        <View
            style={[styles.button, {
                paddingHorizontal: 0,
                paddingVertical: 0,
                overflow: "hidden"
            }, hasShadow ? shadow : null, bt, style]}>
            <TouchableRipple style={[styles.button, styles, {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent"
            }]}{...options}
            >
                {icon}
            </TouchableRipple>
        </View>
    )
}
export {Button, ButtonIcon, Loading}