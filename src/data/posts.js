import axios from "axios";

export const createPost = async (file) => {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND}/posts/create_post`,file);
    return res;
}

export const getAllPosts = async (viewerUid) => {
    return (await axios.post(`${process.env.REACT_APP_BACKEND}/posts/all_posts`, {
        viewerUid
    })).data;
}

export const getPost = async (postId, viewerUid) => {
    return (await axios.post(`${process.env.REACT_APP_BACKEND}/posts/get_post`, {
        postId,
        viewerUid
    })).data;
}