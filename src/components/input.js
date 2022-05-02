import styled from 'styled-components'

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 6px;
    font-size: 12px;
    line-height: 6px;
    color: #8e8e8e;
    background-color: #fafafa;
    border: 1px solid #dddddd;
    border-radius: 3px;
    text-align: baseline;
    &::placeholder {
        color: blue;
    }
`

export default function Input({value, onChange, ...props}) {
    return (
        <StyledInput 
            value={value} 
            onChange={onChange} 
            {...props}
        />
    )
}