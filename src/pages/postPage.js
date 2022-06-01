import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Navigation from "../components/navigation"
import Post from "../components/post"
import { getPost } from '../data/posts';
import { useParams } from 'react-router-dom';

const Page = styled.div`
    display: flex;
    justify-content: center;
    padding: 33px 20px 0;
`

const Container = styled.div`
    flex: 0 1 933px;
`

const PostPage = () => {
    const [post, setPost] = useState(null);
    const { postId } = useParams();
    console.log(postId);

    useEffect(()=>{
        (async ()=>{
            const res = await getPost(postId);
            setPost(res);
        })()
    }, []);

    return (
        <>
            <Navigation />
            {
                !!post ?
                <Page>
                    <Container>
                        <Post aspectRatio={'standard'} post={post} isVertical={false} />
                    </Container>
                </Page>
                :
                <div>could not find post!</div>
            }
        </>
    )
}

export default PostPage