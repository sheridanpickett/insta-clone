import { useState, useRef } from 'react';
import { createPost } from '../data/posts';
import useAuth from '../context/useAuth';

const UploadPhoto = () => {

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
        <button onClick={handleClick}>
            <svg aria-label="New post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
            </svg>
            <form className="hidden" encType="multipart/form-data" method="POST" role="presentation">
                <input ref={inputRef} onChange={handleFileSelect} type="file" accept="image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime" />
            </form>
        </button>
    )
}

export default UploadPhoto;