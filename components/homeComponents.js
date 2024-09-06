import {FlatList, Image, Text, TextInput, View} from "react-native";
import {HFrame, VFrame} from "./frames";
import style from "../src/theme/AppTheme";
import Icon from "./Icons";
import {Button, ButtonIcon, Loading} from "./button";
import {Avatar, Hr, ScaleAnimation, TabManager, TextArea} from "./misc";
import {useCallback, useEffect, useState} from "react";
import {getSupabaseFileUrl, supabase} from "../src/lib/supabase";
import {formatDate} from "../src/(main)/utils";
import {getUserData} from "../src/services/userService";
import {
    checkPostLiked,
    createOrUpdatePostLikes,
    deleteRecord,
    fetchLikes,
    fetchPosts
} from "../src/services/postService";
import {useAuth} from "../src/context/authContext";

const Header = ({listeners}) => {

    return (
        <HFrame style={[{justifyContent: "space-between"},
            style.px2,
            style.py1,
            {borderBottomWidth: 1, borderBottomColor: "rgba(0, 0, 0, 0.1)"}]}>
            <Text style={[style.heading, style.h3,
                {color: style.main.color}]}>
                TWIGGER
            </Text>
            <HFrame gap={10}>
                <ButtonIcon
                    icon={<Icon name="plus" fill="#000"/>} style={{backgroundColor: "#fff"}}
                    onClick={_ => {
                        if (listeners.onBtnCreate) listeners.onBtnCreate()
                    }}
                />
                <ButtonIcon
                    icon={<Icon fill={style.main.color} name="bell"/>} style={{backgroundColor: "#fff"}}
                    onClick={_ => {
                        // if (listeners.onP) listeners.onBtnCreate()
                    }}
                />
                <ButtonIcon
                    icon={<Icon fill={style.main.color} name="bars"/>} style={{backgroundColor: "#fff"}}
                    onClick={_ => {
                        // if (listeners.onP) listeners.onBtnCreate()
                    }}
                />
            </HFrame>
        </HFrame>
    )
}

export const HomeListeners = ({
                                  onBtnCreate, onProfile,
                                  pager
                              }) => {
    return {onBtnCreate, onProfile, pager}
}

const Footer = ({listeners}) => {
let {user} = useAuth();
    return (
        <TabManager
            tab_listener={tab => {
                listeners.hasOwnProperty("pager") ? listeners.pager(tab) : null;
            }}
            style={[{justifyContent: "space-between"},
                style.px2,
                style.py1,
                {
                    backgroundColor: "#FCE4EC"
                }]}>


            <ButtonIcon
                icon={<Icon fill={style.main.color} name="home"/>} style={{backgroundColor: "#fff"}}
            />
            <ButtonIcon
                icon={<Icon fill={style.main.color} name="search"/>} style={{backgroundColor: "#fff"}}
            />
            <ButtonIcon
                icon={<Icon fill={style.main.color} name="chat"/>} style={{backgroundColor: "#fff"}}
            />
            <Avatar src={user?.image} size={40} onPress={
                _ => {
                    if (listeners.onProfile) listeners.onProfile()
                }
            }/>
        </TabManager>
    )
}

export {Footer, Header}


export const Posts = _ => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    let limit = 2;
    const handlePostEvent = async (payload) => {
        if (payload.eventType === "INSERT" && payload?.new?.id) {
            let newPost = {...payload.new},
                userData = await getUserData(newPost?.userId);
            newPost.user = userData.success ? userData.data : {};
            setPosts(prevPosts => [newPost, ...prevPosts])
        }
    }
    useEffect(() => {
        getPosts().then()
        const postChanel = supabase
            .channel('posts')
            .on('postgres_changes', {event: '*', schema: 'public', table: 'posts'}, handlePostEvent)
            .subscribe();


        return () => {
            supabase.removeChannel(postChanel).then();
        };
    }, []);

    const getPosts = async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        // limit += 2;
        let posts = await fetchPosts(page, limit).then();
        if (posts.length < limit) {
            setHasMore(false);
            console.log("no more")
        }
        setPage(prevPage => prevPage + 1);
        setPosts(prevPosts => [
            ...prevPosts, ...posts
        ]);
        setLoading(false);
    }
    const loadMore = useCallback(_ => {
        getPosts().then()
    }, [page, loading, hasMore])


    return (
        <VFrame>
            <FlatList

                showsHorizontalScrollIndicator={false}
                data={posts}
                keyExtractor={(item) => item.id.toString()
                }
                renderItem={
                    ({item}) => (
                        <PostItem post={item}/>
                    )}
                style={{paddingHorizontal: 1, paddingVertical: 10}}

                ListFooterComponent={
                    <View style={{paddingVertical: 15}}>
                        {hasMore ? (
                            <View>
                                <Loading/>
                            </View>
                        ) : (<VFrame>
                            <Text style={[style.button, {backgroundColor: "transparent", color: "#000"}, style.h3]}>No
                                more posts</Text>
                        </VFrame>)
                        }
                    </View>}
                onEndReached={loadMore}

            />
        </VFrame>

    );

};

const PostItem = ({post}) => {
    const [canComment, setCanComment] = useState(false);
    const [liked, setLiked] = useState(false);
    const [postLikes, setPostLikes] = useState([]);
    const {user} = useAuth();
    const getLikes = async () => {
        let likes = await fetchLikes(post.id);
        setPostLikes(likes)
    }
    const checkLiked = async _ =>
        setLiked(await checkPostLiked(post.id, user.id))

        (_ => checkLiked())();
    const addLike = async () => {

        let postId = post.id,
            userId = user.id;
        if (liked)
            await deleteRecord("postLikes", {
                postId, userId
            });
        else
            await createOrUpdatePostLikes({
                postId, userId
            })

        setLiked(!liked);
    }


    useEffect(() => {
        getLikes().then()
    }, [postLikes.length]);
    let liked_props = {fill: "#000"}

    const dLike = _ => {
        liked && (_ => {
            liked_props.fill = "red"
        })()
    }

    dLike()
    useEffect(() => {
        dLike()
    }, [liked]);

    return (
        <VFrame style={[{padding: 5}, style.border1]}>
            <HFrame gap={5}
                    style={{alignItems: "top"}}>
                <View style={{marginTop: 10}}>
                    <Avatar src={post.user.image} size={55}/>
                </View>
                <VFrame>
                    <HFrame>
                        <VFrame>
                            <HFrame gap={2} style={{alignItems: "center"}}>
                                <Text style={[style.h3, {
                                    fontWeight: 700,
                                    fontSize: 24,
                                    color: style.main.color
                                }]}>{post?.user?.name}</Text>
                                <View style={{color: style.textMuted}}><Icon name={"clock"} size={16}
                                                                             fill={style.textMuted.color}/></View>
                                <Text style={[style.textMuted]}>{formatDate(post.created_at)}</Text>
                                <ButtonIcon type={"rounded"} size={44} style={{
                                    marginStart: "auto",
                                    backgroundColor: "rgba(0,0,0,0.05)",
                                    shadowColor: "transparent"
                                }} icon={<Icon fill={"black"} name={"h_dots"}/>}/>
                            </HFrame>
                        </VFrame>
                    </HFrame>
                    <Text style={[style.h5, {color: "rgba(0,0,0,0.7)", paddingBottom: 10}]}>
                        {post.body}
                    </Text>
                    {
                        post.file && (
                            <View>
                                <Image transition={100} source={{uri: getSupabaseFileUrl(post?.file)}}
                                       style={{height: 300, width: 300, borderRadius: 10, maxWidth: "100%"}}
                                       resizeMode={"cover"}/>
                            </View>
                        )
                    }


                </VFrame>

            </HFrame>
            <HFrame gap={10} style={[style.py2, style.px1,]}>
                <HFrame style={{marginStart: "auto"}} gap={5}>
                    <ScaleAnimation>
                        <ButtonIcon
                            style={{backgroundColor: "#fdf1f6"}}
                            icon={<Icon name="heart" {...liked_props} />}
                            onClick={_ => {
                                addLike().then()
                            }}
                        />
                    </ScaleAnimation>
                    <Text style={[style.h5]}>{postLikes.length || ""}</Text>
                </HFrame>
                <HFrame gap={5}>
                    <ButtonIcon style={[{backgroundColor: "#fdf1f6", color: "#000"}]}
                                icon={<Icon name="comment" fill="#000" size={36}/>}/>
                    <Text style={[style.h5]}>{0 || ""}</Text>
                </HFrame>
                <HFrame gap={5}>
                    <ButtonIcon style={{backgroundColor: "#fdf1f6"}} icon={<Icon name="forward"/>}/>
                </HFrame>
            </HFrame>
            <Button hasShadow={false} text={"Add comment"}
                    icon={<Icon name={"plus"} fill={"#000"}/>}
                    style={{color: "#000"}}
                    onClick={_ => setCanComment(!canComment)}
                    background={"rgba(230,192,248,0.5)"}
            />
            {canComment &&
                (
                    <VFrame style={{marginTop: 5}} gap={5}>
                        <TextArea placeholder="Write your comment..." style={[style.input]}
                                  lines={3}
                        />
                        <HFrame style={[{marginStart: "auto"}]}>
                            <ButtonIcon icon={<Icon name="send"/>}/>
                        </HFrame>
                    </VFrame>
                )
            }
        </VFrame>
    )
}