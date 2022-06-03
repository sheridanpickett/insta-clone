import axios from 'axios';

export const addLike = async (postId, uid) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/likes/toggle_like`, {
            postId,
            uid
        });
        return res;
    } catch(error) {
        return error;
    }
}

export const getLikeCount = async (postId) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND}/likes/like_count/${postId}`)
        return res.data.rows[0].count;
    } catch(error) {
        return error;
    }
}