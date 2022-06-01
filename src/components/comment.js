import styled from 'styled-components';

const Root = styled.div`
    width: 100%;
    max-width: inherit;
    overflow-wrap: break-word;
    font-size: 14px;
    line-height: 18px;
    color: #262626;
    margin-bottom: 4px;
`
    
const Username = styled.span`
    font-weight: 600;
    margin-right: 3px;
`

const CommentContent = styled.span`

`

const Comment = ({username, content}) => {
    return (
        <Root>
            <Username>{username}</Username>
            <CommentContent>{content}</CommentContent>
        </Root>
    )
}

export default Comment;