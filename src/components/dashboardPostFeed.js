import { useState, useEffect } from 'react';
import Post from "./post";
import axios from 'axios';
import { nanoid } from 'nanoid';

const DashboardPostFeed = () => {
    
    const [imageKeys, setImageKeys] = useState([]);

    useEffect(()=>{
        const getAllImageKeys = async () => {
            let imageKeys = (await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/images/allImageKeys`)).data;
            setImageKeys(imageKeys);
        }
        getAllImageKeys();
    }, [])

    return (
        <div className="flex flex-col items-center flex-[0_1_470px]">
            {imageKeys.map((imageKey)=>(
                <Post key={nanoid()} imageKey={imageKey} aspectRatio="standard"/>
            ))}
        </div>
    )
}

export default DashboardPostFeed;