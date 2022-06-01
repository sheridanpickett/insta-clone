import styled from 'styled-components';
import {ReactComponent as SmileyIcon} from '../images/smiley.svg';
import AutoExpandTextArea from './autoExpandTextArea';

const Root = styled.section`
    padding: 4px 12px;
    border-top: 1px solid #efefef;
    width: 100%;
`

const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
`

const IconContainer = styled.div`
    display: inline-block;
    padding: 8px 12px 8px 0;
`

const Button = styled.button`
    color: #0095f6;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin-left: 1px;
`

const PostCommentInput = ({value, setValue, onSubmit}) => {
    return (
        <Root>
            <Form onSubmit={e=>{
                e.preventDefault();
                onSubmit();
            }}>
                <IconContainer>
                    <SmileyIcon/>
                </IconContainer>
                <AutoExpandTextArea value={value} setValue={setValue} placeholder="Add a comment..."></AutoExpandTextArea>
                <Button type="submit">Post</Button>
            </Form>
        </Root>
    )
}

export default PostCommentInput;