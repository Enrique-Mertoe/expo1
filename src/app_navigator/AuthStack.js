import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from "../screens/Create";
import ProfileScreen from "../screens/Profile"; // Replace with your actual Home screen component

const Stack = createStackNavigator();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* Add other authenticated screens here */}
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
