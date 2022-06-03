import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Post from "./post";
import { nanoid } from 'nanoid';
import { getAllPosts } from '../data/posts';
import useAuth from '../context/useAuth';

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
    const auth = useAuth();

    useEffect(()=>{
        (async () => {
            if(auth && auth.currentUser) {
                const posts = await getAllPosts(auth.currentUser.uid);
                setPosts(posts);
            }
        })()
    }, [auth])

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