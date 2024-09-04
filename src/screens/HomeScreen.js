// src/screens/HomeScreen.js
import React, {useEffect, useState} from 'react';
import {useAuth} from '../context/authContext';
import commonStyles from '../theme/AppTheme';
import {SafeAreaView} from "react-native-safe-area-context";
import {VFrame, HFrame} from "../../components/frames";
import {Footer, Header, HomeListeners, Posts} from "../../components/homeComponents";
import {ViewPager, ViewPagerItem} from "../../components/misc";
import {Text} from "react-native";
import style from "../theme/AppTheme";

const HomeScreen = ({navigation}) => {
    const {logout} = useAuth(),
        [activeTab, setActiveTab] = useState(0);
    useEffect(() => {

    }, [activeTab]);

    let activeElement = (index => {
        if (index === 0) {
            return (<Posts/>)
        } else if (index === 1) {
            return (
                <VFrame>
                    <Text style={style.h3}>
                        Tec=x marcus
                    </Text>
                </VFrame>
            )
        }else return (<Posts/>)
    })(activeTab);

    return (
        <SafeAreaView style={[commonStyles.layout, {backgroundColor: "#fdf1f6"}]}>
            <VFrame gap={0}>
                <Header listeners={HomeListeners({
                    onBtnCreate: _ => navigation.navigate("Create")
                })}/>
                <ViewPager
                >{activeElement}
                </ViewPager>
                <Footer listeners={{
                    onProfile: _ => navigation.navigate("Profile"),
                    pager: tab_index => {
                        setActiveTab(tab_index)
                        console.log(tab_index)
                    }
                }}/>
            </VFrame>
        </SafeAreaView>
    );
};

export default HomeScreen;
