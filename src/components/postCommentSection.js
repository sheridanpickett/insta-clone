import { useState } from 'react';
import styled from 'styled-components';
import PostCommentInput from './postCommentInput';

const Root = styled.div`
`

const LikeCount = styled.section`
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 8px;
    padding-left: 12px;
`

const DateCreated = styled.div`
    line-height: 12px;
    font-size: 10px;
    letter-spacing: .2px;
    color: #8e8e8e;
    margin-bottom: 12px;
    padding-left: 12px;
`

const PostCommentSection = ({likeCount, dateCreated}) => {

    const [comment, setComment] = useState("");

    return (
        <Root>
            {!!likeCount && <LikeCount>{likeCount} likes</LikeCount>}
            <DateCreated datetime={dateCreated}>
                <time>MAY 16</time>
            </DateCreated>
            <PostCommentInput value={comment} setValue={setComment}/>
        </Root>
    )
}

export default  PostCommentSection;