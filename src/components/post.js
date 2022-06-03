import { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import PostContent from "./postContent";
import PostHeader from './postHeader';
import PostIconBar from './postIconBar';
import PostCommentInput from './postCommentInput';
import useAuth from '../context/useAuth';
import CommentsFeed from './commentsFeed';
import CommentPreview from './commentPreview';
import { addComment, getAllComments, getCommentCount } from '../data/comments';
import { getLikeCount } from '../data/likes';

const Container = styled.article`
    width: 100%;
    background: #ffffff;
    border: 1px solid #dbdbdb;

    ${({isVertical}) => {
        if(isVertical) {
            return css`
                    margin-top: 18px;
                    border-radius: 8px;
                `
            } else {
                return css`
                    display: flex;
                    border-bottom-right-radius: 3px;
                    border-top-right-radius: 3px;
                `
        }
    }}
`

const DateCreated = styled.div`
    line-height: 12px;
    font-size: 10px;
    letter-spacing: .2px;
    color: #8e8e8e;
    margin-bottom: 12px;
    padding-left: 12px;
`

const LikeCount = styled.section`
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 8px;
    padding-left: 12px;
`

const Content = styled.div`
    ${({aspectRatio})=>{
        switch(aspectRatio) {
            case 'standard':
                return css`
                    flex-basis: 773px;
                `
            case 'portrait':
                return css`
                    flex-basis: 618px;
                    max-height: 773px;
                    max-width: 618.4px;
                `
            case 'landscape':
                return css`
                    flex-basis: 773px;
                `
            default:
                return css`
                    flex-basis: 773px;
                `
        }
    }}
    flex-grow: 1;
    display: flex;
    align-items: center;
    background-color: #000;
`

const ContentInner = styled.div`
    flex: 1 1 auto;
    border-right: 1px solid #efefef;
`
    
const Sidebar = styled.section`
    flex-grow: 1;
    flex-shrink: 2;
    max-width: 500px;
    min-width: 334px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const Post = ({aspectRatio, post, isVertical, showComments}) => {
    const { post_id, date_created, file_key, ...owner } = post;
    const auth = useAuth();
    const [commentCount, setCommentCount] = useState(0);
    const [likeCount, setLikeCount] = useState(0);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        (async ()=> {
            const comments = (await getAllComments(post_id)).data;
            const likeCountData = await getLikeCount(post_id);
            setComments(comments)
            setLikeCount(likeCountData);
            console.log(likeCountData);
        })();
    }, [])

    const handleSubmit = async () => {
        const res = await addComment(auth.currentUser.uid, post_id, comment, null);
        setComment("");
    }

    if(isVertical) {
        return (
            <Container isVertical={isVertical}>
                <PostHeader owner={owner} />
                <Content aspectRatio={aspectRatio}>
                    <ContentInner>
                        <PostContent aspectRatio={aspectRatio} imageKey={file_key}/>
                    </ContentInner>
                </Content>
                <PostIconBar postId={post_id}/>
                <LikeCount>{likeCount} likes</LikeCount>
                {
                    !!showComments && <CommentPreview comments={comments} />
                }
                <DateCreated datetime={date_created}>
                    <time>MAY 16</time>
                </DateCreated>
                <PostCommentInput value={comment} setValue={setComment} onSubmit={handleSubmit}/>
            </Container>
        )
    } else {
        return (
            <Container isVertical={isVertical}>
                <Content aspectRatio={aspectRatio}>
                    <ContentInner>
                        <PostContent aspectRatio={aspectRatio} imageKey={file_key} />
                    </ContentInner>
                </Content>
                <Sidebar>
                    <PostHeader owner={owner} />
                    <CommentsFeed postId={post_id} comments={comments}/>
                    <PostIconBar postId={post_id} />
                    <LikeCount>{likeCount}</LikeCount>
                    <DateCreated datetime={date_created}>
                        <time>MAY 16</time>
                    </DateCreated>
                    <PostCommentInput value={comment} setValue={setComment} onSubmit={handleSubmit}/>
                </Sidebar>
            </Container>
        )
    }

}

export default Post;