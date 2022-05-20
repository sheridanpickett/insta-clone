import { useState } from 'react';
import styled, {css} from 'styled-components';
import SpriteSheet from '../images/sprites.png';

const Container = styled.div`
    width: 100%;
    position: relative;
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
    pointer-events: none;
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
    background-color: #fafafa;
    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #fafafa inset;
    }
    &: autofill {
        box-shadow: 0 0 0px 1000px #fafafa inset;
    }
    font-size: ${props=>props.active ? '12px' : '18px'};
    padding: ${ props=>props.active ? '14px 8px 2px 8px' : '9px 8px 7px 8px'};
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

const NotValidIcon = styled.div`
    height: 22px;
    width: 22px;
    margin-right: 8px;
    background-image: url(${SpriteSheet});
    background-size: 440px 411px;
    background-position: -402px -353px;
`

const ValidIcon = styled.div`
    height: 22px;
    width: 22px;
    margin-right: 8px;
    background-image: url(${SpriteSheet});
    background-size: 440px 411px;
    background-position: -402px -330px;
`

export default function FormInput({value, accepted, hasError, onChange, placeholder, type, variant, onFocus, onBlur, ...props}) {
    const [focus, setFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 

    const toggleShowPassword = e => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }


    return (
        <Container className="flex items-center" variant={variant} focus={focus}>
            <Label>
                <Placeholder variant={variant} active={value!==''}>{placeholder}</Placeholder>
                <StyledInput
                    variant={variant}
                    active={value!==''}
                    value={value}
                    type={(showPassword === false && type === 'password') ? 'password' : 'text'}
                    onChange={onChange}
                    onFocus={e=>{
                        setFocus(true);
                        onFocus && onFocus(e);
                    }}
                    onBlur={e=>{
                        setFocus(false);
                        onBlur && onBlur(e);
                    }}
                    {...props}
                />
            </Label>
            {
                accepted && <ValidIcon />
            }
            {
                (hasError && !focus) && <NotValidIcon />
            }
            {
                (type === 'password' && value !== '') &&
                <ButtonContainer>
                    <ShowPasswordButton onClick={toggleShowPassword}>
                        {showPassword ? 'Hide' : 'Show'}
                    </ShowPasswordButton>
                </ButtonContainer>
            }
        </Container>
    )
}