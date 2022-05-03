import { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    position: relative;
    border: 1px solid ${props => props.focus ? '#a8a8a8' : '#d8d8d8'};
    border-radius: 3px;
    margin-bottom: 6px;
    display: flex;
    background-color: #fafafa;
`

const Placeholder = styled.span`
    position: absolute;
    top: 0px;
    left: 8px;
    color: #8e8e8e;
    font-size: 12px;
    line-height: 36px;
    vertical-align: baseline;
    cursor: text;
    transform-origin: top left;
    transition: transform 0.1s ease-out;
    ${props=>props.active && 'transform: matrix(0.83333, 0, 0, 0.83333, 0, -6.3333)'}

`

const StyledInput = styled.input`
    width: 100%;
    font-size: ${props=>props.active ? '12px' : '18px'};
    line-height: 20px;
    cursor: text;
    padding: ${ props=>props.active ?
        '14px 8px 2px 8px':
        '9px 8px 7px 8px'
    };
    outline: none;
    background-color: inherit;
`

const ShowPasswordButton = styled.button`
    font-size: 14px;
    font-weight: 500;
`

const ButtonContainer = styled.div`
    padding-right: 8px;
    display: flex;
    align-items: center;
    background-color: inherit;
`

const Label = styled.label`
    flex-grow: 1;
`

export default function Input({value, onChange, placeholder, type, ...props}) {
    const [focus, setFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 

    const toggleShowPassword = e => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <Container focus={focus}>
            <Label>
                <Placeholder active={value!==''}>{placeholder}</Placeholder>
                <StyledInput
                    active={value!==''}
                    value={value} 
                    type={(showPassword === false && type === 'password') ? 'password' : 'text'}
                    onChange={onChange}
                    onFocus={()=>setFocus(true)}
                    onBlur={()=>setFocus(false)}
                    {...props}
                />
            </Label>
            {
                (type === 'password' && value !== '') &&
                <ButtonContainer>
                    <ShowPasswordButton
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </ShowPasswordButton>
                </ButtonContainer>
            }
        </Container>
    )
}