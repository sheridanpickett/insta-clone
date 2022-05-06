import axios from 'axios';
import { useState } from 'react';
import Navigation from '../components/navigation';

export default function Dashboard() {
    const [imageFile, setImageFile] = useState(null);

    const handleFileSelect = e => {
        setImageFile(e.target.files[0]);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('imageFile', imageFile);
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_SERVER_URL}/images`,
                formData,
                { headers: {'content-type': 'multipart/form-data'}}
            )
            console.log(res);
        } catch(err) {
            console.log(err);
        }
    }
    
    return (
        <>
            <Navigation />
            <div className="flex flex-col items-center pt-20">
                <h1>Upload a photo:</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleFileSelect} type="file" accept="image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}