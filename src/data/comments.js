import axios from 'axios';

export const addComment = async (uid, postId, content, parentId = null) => {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND}/comments/add`, {uid, postId, content, parentId});
    return res;
}

export const getAllComments = async (postId) => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND}/comments/get_all/${postId}`);
    return res;
}