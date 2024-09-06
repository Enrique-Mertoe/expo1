import {supabase, uploadFile} from "../lib/supabase";

export const getUserData = async (uid) => {
    try {
        const {data, error} = await supabase
            .from("users").select()
            .eq("id", uid).single();
        if (error) return {success: false, msg: error.message}
        return {success: true, data};
    } catch (e) {
        console.log("fetch error: ", e.message);
        return {success: false, msg: e.message};
    }
}

export const updateUserData = async (userId, userData) => {
    try {
        if (userData.image && typeof userData.image === "object") {
            let result = await uploadFile("avatarImages", userData?.image?.uri);
            console.log(result.data)
            if (result.success) userData.image = result.data;
            else userData.image = null;
        }

        const {data, error} = await supabase.from("users")
            .update(userData)
            .eq("id", userId)
        if (error) {
            console.log("Post create error: ", error);
            return {success: false, msg: "Something went wrong"}
        }

        return {success: true, data: data};

    } catch (e) {
        console.log("Post create error: ", e.message);
        return {success: false, msg: "Something went wrong"}
    }
}