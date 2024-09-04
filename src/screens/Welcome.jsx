import { useAuth } from '../context/authContext';
import { View, Text, TextInput} from 'react-native';
import {Button} from "../../components/button.jsx"
import Icon from "../../components/Icons";

import styles from "../theme/AppTheme"
import {SafeAreaView} from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const { login } = useAuth();
  return (
    <SafeAreaView style={[styles.layout,styles.bgMain]}>
      <View style={[styles.vStack,styles.gap2,styles.px2,styles.centerVertivcal]}>
      <View style={styles.mxAuto}>
       <Icon name="logo" size="64"/>
      </View>

        <Text style={[styles.title,styles.mxAuto]}>TWIGGER</Text>
        <Button style={styles.mtAuto}  text="Get Started"
        onClick={()=>navigation.navigate("Login")}
        /> 
      </View>
    </SafeAreaView>
  );
};



export default LoginScreen;