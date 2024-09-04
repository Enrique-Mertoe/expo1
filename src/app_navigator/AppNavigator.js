import {NavigationContainer} from '@react-navigation/native';
import AuthenticatedStack from './AuthStack';
import UnauthenticatedStack from './UnAuthStack';
import {useAuth} from '../context/authContext';
import {supabase} from "../lib/supabase";
import {useEffect} from "react";
import {getUserData} from "../services/userService";

const AppNavigator = () => {
    const {user,login,setUser} = useAuth();
    useEffect(() => {
        supabase.auth.onAuthStateChange((_ev,session)=>{
            if (session){
                login(session?.user);
                updateUserData(session?.user).then();
            }
        });
    }, []);

    const updateUserData = async (user)=>{
        let res = await getUserData(user?.id);
        setUser(res.data)
    }
    return (
        <NavigationContainer>
            {user ? <AuthenticatedStack/>
                : <UnauthenticatedStack/>}
        </NavigationContainer>
    );
};

export default AppNavigator;
