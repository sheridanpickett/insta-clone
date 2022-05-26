import styled from 'styled-components';
import PostContent from "./postContent";
import PostHeader from './postHeader';
import PostIconBar from './postIconBar';
import PostCommentSection from './postCommentSection';

const Container = styled.article`
    width: 100%;
    margin-top: 18px;
    border: 1px solid #dddddd;
    border-radius: 8px;
    background: #ffffff;
`

const Post = ({aspectRatio, post}) => {
    const { date_created, file_key, ...owner } = post;
    return (
        <Container>
            <PostHeader owner={owner} />
            <PostContent aspectRatio={aspectRatio} imageKey={file_key}/>
            <PostIconBar/>
            <PostCommentSection likeCount={0} />
        </Container>
    )
}

export default Post;