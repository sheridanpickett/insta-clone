import { useState, useEffect } from 'react';
import Post from "./post";
import { nanoid } from 'nanoid';
import { getAllPosts } from '../data/posts';

const DashboardPostFeed = () => {
    
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        (async () => {
            const posts = await getAllPosts();
            setPosts(posts);
        })()
    }, [])

    return (
        <div className="flex flex-col items-center flex-[0_1_470px]">
            {posts.map((post)=>(
                <Post key={nanoid()} post={post} aspectRatio="standard"/>
            ))}
        </div>
    )
}

export default DashboardPostFeed;