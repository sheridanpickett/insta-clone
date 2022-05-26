import { useState, useRef } from 'react';
import { createPost } from '../data/posts';
import useAuth from '../context/useAuth';

const CreatePost = ({children}) => {

    const [imageFile, setImageFile] = useState(null);
    const inputRef = useRef(null);
    const auth = useAuth();

    const handleFileSelect = async e => {
        setImageFile(e.target.files[0]);
        const formData = new FormData();
        formData.append('imageFile', e.target.files[0]);
        formData.append('uid', auth.currentUser.uid);
        try {
            const res = await createPost(formData);
            console.log(res);
        } catch(err) {
            console.log(err);
        }
    }

    const handleClick = () => {
        inputRef.current.click();
    }

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('imageFile', imageFile);
    //     try {
    //         const res = await axios.post(
    //             `${process.env.REACT_APP_BACKEND}/images`,
    //             formData,
    //             { headers: {'content-type': 'multipart/form-data'}}
    //         )
    //         console.log(res);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    return (
        <div className="block" onClick={handleClick}>
            {children}
            <form className="hidden" encType="multipart/form-data" method="POST" role="presentation">
                <input ref={inputRef} onChange={handleFileSelect} type="file" accept="image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime" />
            </form>
        </div>
    )
}

export default CreatePost;