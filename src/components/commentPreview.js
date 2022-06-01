import styled from 'styled-components';
import Comment from "./comment";
import ViewAllComments from './viewAllComments';

const Comments = styled.section`
    padding: 0 12px;
    margin-bottom: 4px;
    overflow: auto;
    flex: 1 1 auto;
    max-width: inherit;
`

const CommentPreview = ({comments, caption}) => {
    return (
        <Comments>
            {!!caption && <Comment username={caption.username} content={caption.content} />}
            {comments.length > 0 && <Comment username={comments[0].username} content={comments[0].content} />}
            {comments.length > 1 && <ViewAllComments commentsLength={comments.length} />}
        </Comments>
    )
}

export default CommentPreview;