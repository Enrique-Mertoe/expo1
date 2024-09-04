import {AppState} from 'react-native';
// import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {createClient} from '@supabase/supabase-js'
import config from '../constants'
import * as FileSystem from 'expo-file-system'
import {decode} from 'base64-arraybuffer'

const supabaseUrl = config.EXPO_PUBLIC_SUPABASE_URL
const supabaseAnonKey = config.EXPO_PUBLIC_SUPABASE_ANON_KEY;


export const getSupabaseFileUrl = file => {
    return file ? `${supabaseUrl}/storage/v1/object/public/uploads/${file}` : null;
}

export const uploadFile = async (folder, file) => {
    try {
        let fileName = generateFileName(folder);
        const base64File = decode(await FileSystem.readAsStringAsync(file, {
            encoding: FileSystem.EncodingType.Base64
        }));
        let {data, error} = await supabase.storage
            .from("uploads").upload(
                fileName, base64File, {
                    cacheControl: "3600",
                    upsert: true,
                    contentType: "image/*"
                });
        console.log(error);
        if (error) return {success:false,msg:"something went wrong"}
        return {success:true,data: data.path}
    } catch (error) {
        console.log(error)
        return {success:false,msg:"something went wrong"}
    }
}
export const generateFileName =(dir,filename)=>{
    return `/${dir}/${(new Date().getTime())}.png`;
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})
