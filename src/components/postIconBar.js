import styled from 'styled-components';
import {ReactComponent as HeartIcon} from '../images/heart.svg';
import {ReactComponent as CommentIcon} from '../images/comment.svg';
import {ReactComponent as MessageIcon} from '../images/messages.svg';
import {ReactComponent as SavedIcon} from '../images/saved.svg';

    
const IconsSection = styled.section`
    border-top: .5px solid #efefef;
    padding: 4px 4px 6px;
    display: flex;
    justify-content: space-between;
`

const IconButton = styled.button`
    padding: 8px;
`

const PostIconBar = () => {
    return (
        <IconsSection>
            <div>
                <IconButton>
                    <HeartIcon/>
                </IconButton>
                <IconButton>
                    <CommentIcon/>
                </IconButton>
                <IconButton>
                    <MessageIcon/>
                </IconButton>
            </div>
            <IconButton>
                <SavedIcon/>
            </IconButton>
        </IconsSection>
    )
}

export default PostIconBar;