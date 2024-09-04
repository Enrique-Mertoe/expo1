import {supabase, uploadFile} from "../lib/supabase";

export const createOrUpdatePost = async post => {
    try {
        if (post.file && typeof post.file === "object") {
            let result = await uploadFile("postImages", post?.file?.uri);
            if (result.success) post.file = result.data;
            else return result
        }

        const {data, error} = await supabase.from("posts")
            .upsert(post)
            .select().single()
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

export const createOrUpdatePostLikes = async like_data => {
    try {
        const {data, error} = await supabase.from("postLikes")
            .upsert(like_data)
            .select().single()
        if (error) {
            console.log("Like create error: ", error);
            return {success: false, msg: "Something went wrong"}
        }

        return {success: true, data: data};

    } catch (e) {
        console.log("Like create error: ", e.message);
        return {success: false, msg: "Something went wrong"}
    }
}

export const deleteRecord = async (target, delete_data) => {
    try {
        const {data, error} = await supabase.from(target)
            .delete()
            .match(delete_data)

        if (error) {
            console.log("Like delete error: ", error);
            return {success: false, msg: "Something went wrong"}
        }

        return {success: true, data: data};

    } catch (e) {
        console.log("Like delete error: ", e.message);
        return {success: false, msg: "Something went wrong"}
    }
}

export const fetchPosts = async (page,limit = 10) => {
    const offset = (page - 1) * limit;
    const {data, error} = await supabase
        .from('posts')
        .select("*,user : users (id,name,image)")
        .order("created_at", {ascending: false})
        .range(offset, offset + limit - 1);
    if (error) {
        console.error('Error fetching posts:', error);
        return;
    }

    return data;
};

export const fetchLikes = async (target) => {
    const {data, error} = await supabase
        .from('postLikes')
        .select("*,user : users (id,name,image)")
        .eq("postId", target)
        .order("created_at", {ascending: false});
    if (error) {
        console.error('Error fetching posts:', error);
        return;
    }

    return data;
};

export const checkPostLiked = async (postId, userId) => {
    try {
        const {data, error, count} = await supabase
            .from('postLikes')
            .select('*', {count: 'exact'})
            .match({postId: postId, userId: userId})
            .single();
        return !!data && !error
    } catch (error) {
        console.error('Error checking like status:', error.message);
        return false;
    }
};