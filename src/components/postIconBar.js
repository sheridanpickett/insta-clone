import styled from 'styled-components';
import {ReactComponent as HeartIcon} from '../images/heart.svg';
import {ReactComponent as CommentIcon} from '../images/comment.svg';
import {ReactComponent as MessageIcon} from '../images/messages.svg';
import {ReactComponent as SavedIcon} from '../images/saved.svg';
import useAuth from '../context/useAuth';
import { addLike } from '../data/likes';
    
const IconsSection = styled.section`
    border-top: .5px solid #efefef;
    padding: 4px 4px 6px;
    display: flex;
    justify-content: space-between;
`

const IconButton = styled.button`
    padding: 8px;
`

const PostIconBar = ({postId}) => {
    const auth = useAuth();

    const handleClick = async () => {
        try {
            await addLike(postId, auth.currentUser.uid);
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <IconsSection>
            <div>
                <IconButton>
                    <HeartIcon onClick={handleClick}/>
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