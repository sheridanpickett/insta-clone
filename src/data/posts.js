import axios from "axios";

export const createPost = async (file) => {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND}/posts/create_post`,file);
    return res;
}

export const getAllPosts = async () => {
    return (await axios.get(`${process.env.REACT_APP_BACKEND}/posts/all_posts`)).data;
}