import { useState } from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 6px;
    display: flex;
    background-color: #fafafa;
    border-radius: 3px;
    border: 1px solid ${props => props.focus ? '#a8a8a8' : '#d8d8d8'};
    ${({variant})=> variant==='$secondary' && 'border-radius: 6px'};
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
    ${({variant})=>variant==='$secondary' && css`
        font-size: 14px;
        color: #c7c7c7;
        ${props=>props.active && 'transform: matrix(0.8, 0, 0, 0.8, 0, -6)'}
    `}
`

const StyledInput = styled.input`
    width: 100%;
    line-height: 20px;
    cursor: text;
    outline: none;
    background-color: inherit;
    font-size: ${props=>props.active ? '12px' : '18px'};
    padding: ${ props=>props.active ? '14px 8px 2px 8px':'9px 8px 7px 8px'};
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

export default function Input({value, onChange, placeholder, type, variant, ...props}) {
    const [focus, setFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 

    const toggleShowPassword = e => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <Container variant={variant} focus={focus}>
            <Label>
                <Placeholder variant={variant} active={value!==''}>{placeholder}</Placeholder>
                <StyledInput
                    variant={variant}
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