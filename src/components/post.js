import styled from 'styled-components';

import PostContent from "./postContent"

const Body = styled.article`
    width: 100%;
    margin-top: 18px;
    border: 1px solid #dddddd;
`

const Post = ({aspectRatio, imageKey}) => {
    return (
        <Body>
            <PostContent aspectRatio={aspectRatio} imageKey={imageKey}/>
        </Body>
    )
}

export default Post;