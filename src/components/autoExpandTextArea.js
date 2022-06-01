import styled from 'styled-components';

const TextArea = styled.textarea`
    resize: none;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all;
    width: 100%;
    outline: none;
    font-size: 14px;
    line-height: 18px;
    color: #272727;
    grid-area: 1 / 1 / 2 / 2;
    max-height: 80px;
    max-width: 376px;
`

const GrowWrap = styled.div`
    display: grid;
    flex-grow: 1;
    max-width: 376px;
    ::after {
        visibility: hidden;
        content: "${props=>props.value}";
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-all;
        width: 100%;
        outline: none;
        font-size: 14px;
        line-height: 18px;
        color: #272727;
        grid-area: 1 / 1 / 2 / 2;
        max-height: 80px;
        max-width: 376px;
    }
`



const AutoExpandTextArea = ({value, setValue, ...props}) => {
    return (
        <GrowWrap value={value}>
            <TextArea rows="1" value={value} onChange={e=>setValue(e.target.value)} {...props}></TextArea>
        </GrowWrap>
    )
}

export default AutoExpandTextArea