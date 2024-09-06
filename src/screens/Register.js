// src/screens/SignupScreen.js
import {React, useRef, useState} from 'react';
import {useRouter} from "expo-router"
import {View, Text, TextInput, Alert} from 'react-native';
import {Button} from '../../components/button.js';
import styles from "../theme/AppTheme";
import Logo from "../theme/Icons";
import {supabase} from '../lib/supabase'
import {SafeAreaView} from "react-native-safe-area-context";
import {useAuth} from "../context/authContext";

const SignupScreen = ({navigation}) => {
    const {login} = useAuth(),
        emailRef = useRef(''),
        passRef = useRef(''),
        unameRef = useRef(''),
        [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        if (!emailRef.current || !passRef.current || !unameRef.current) {
            return Alert.alert("Register", "Please fill all fields!");
        }
        setLoading(true);

        let [email, password, name] = [
            emailRef.current.trim(),
            passRef.current.trim(),
            unameRef.current.trim()
        ];

        const {data: {session}, error} = await supabase.auth.signUp({
            email, password,
            options: {
                data: {name, email}
            }
        });
        setLoading(false);
        if (error) Alert.alert("Register", error.message);
        if (session) {
            login(session?.user)
        }


    }
    return (
        <SafeAreaView style={[styles.container,styles.bgMain]}>
            <View style={[styles.vStack, styles.gap2]}>
                <View style={styles.mxAuto}>
                    <Logo></Logo>
                </View>
                <Text style={[styles.title, styles.mxAuto,styles.main]}>Create Acoount</Text>
                <TextInput
                    style={styles.input}
                    placeholder="User name"
                    onChangeText={val => unameRef.current = val}

                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={val => emailRef.current = val}
                />

                <TextInput

                    style={[styles.input,{marginBottom:20}]}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={value => passRef.current = value}

                />
                <Button

                    text="Sign Up"
                    loading={loading}
                    onClick={onSubmit}
                />
                <Text
                    style={[{marginTop:20},styles.h5]}
                    onPress={() => navigation.navigate('Login')}
                >Already have an account? Login</Text>
            </View>
        </SafeAreaView>
    );
};

export default SignupScreen;
