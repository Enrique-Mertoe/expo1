import {useAuth} from '../context/authContext';
import {View, Text, TextInput, Alert} from 'react-native';
import Logo from "../theme/Icons";

import styles from "../theme/AppTheme"
import {useRef, useState} from "react";
import {Button} from "../../components/button";
import {supabase} from "../lib/supabase";
import {SafeAreaView} from "react-native-safe-area-context";

const LoginScreen = ({navigation}) => {
    const {login} = useAuth(),
        TAG = "Login",
        emailRef = useRef(''),
        passRef = useRef(''),
        [loading, setLoading] = useState(false),
        onSubmit = async () => {
            if (!emailRef.current || !passRef.current) {
                return Alert.alert(TAG, "all fields required!")
            }
            setLoading(true);
            let [email, password] = [
                emailRef.current.trim(),
                passRef.current.trim()
            ];
            const {data: {session}, error} = await supabase.auth.signInWithPassword({
                email, password
            })
            setLoading(false);
            if (error) Alert.alert(TAG, error.message)
            if (session) {
                login(session?.user)
            }
        }
    return (
        <SafeAreaView style={[styles.container,styles.bgMain]}>
            <View style={[styles.vStack,{alignItems:"center"}, styles.gap2]}>
                <View style={styles.mxAuto}>
                    <Logo></Logo>
                </View>

                <Text style={[styles.title,styles.main,styles.py2]}>Welcome Back</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={val => emailRef.current = val}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={val => passRef.current = val}
                />
                <View style={[styles.vStack, styles.gap2,styles.py2]}>
                    <Button
                        style={[styles.button]}
                        text="Login"
                        onClick={onSubmit}
                        loading={loading}
                    />
                    <Text
                        style={[styles.h5]}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        Don't have an account? Sign Up
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};


export default LoginScreen;