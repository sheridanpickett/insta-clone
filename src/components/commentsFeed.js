import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getAllComments } from "../data/comments";
import { nanoid } from 'nanoid';
import Comment from './comment';

const Comments = styled.section`
    padding: 0 12px;
    margin-bottom: 4px;
    overflow: scroll;
    flex: 1 1 auto;
    max-width: inherit;
`


const CommentsFeed = ({comments}) => {

    const renderComments = comments.map(comment => (
        <Comment key={nanoid()} username={comment.username} content={comment.content} />
    ))

    return (
        <Comments>
            {renderComments}
        </Comments>
    )
}

export default CommentsFeed;