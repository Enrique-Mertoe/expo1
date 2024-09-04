import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome.jsx';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Register';

const Stack = createStackNavigator();

const UnauthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default UnauthenticatedStack;
