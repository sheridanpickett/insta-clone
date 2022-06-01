import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Post from "./post";
import { nanoid } from 'nanoid';
import { getAllPosts } from '../data/posts';

const Container = styled.div`
    display: flex;
    justify-content: center;
`
    
const Posts = styled.div`
    flex: 0 1 470px;
    width: 100%;
`

const DashboardPostFeed = () => {
    
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        (async () => {
            const posts = await getAllPosts();
            setPosts(posts);
        })()
    }, [])

    return (
        <Container>
            <Posts>
                {posts.map((post)=>(
                    <Post key={nanoid()} post={post} isVertical={true} showComments={true} dateCreated={post.dateCreated} aspectRatio="standard"/>
                ))}
            </Posts>
        </Container>
    )
}

export default DashboardPostFeed;