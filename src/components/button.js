import styled, {css} from 'styled-components';

const ButtonContainer = styled.button`
    background-color: transparent;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 5px 9px;
    ${({variant}) => {
        switch(variant) {
            case '$form':
                return css`
                    width: 100%;
                    background-color: #53a1e5;
                    border: none;
                    :disabled {
                        background-color: #c0dffd;
                    }
                `
            default:
                break;
        }
    }}
`

const Inner = styled.div`
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    text-align: center;
    color: #262626;
    ${({variant}) => {
        switch(variant) {
            case '$form':
                return css`
                    color: white;
                `
            default:
                break;
        }
    }}
`


export default function Button({variant, children, ...props}) {
    return (
        <ButtonContainer
            variant={variant}
            {...props}
        >
            <Inner variant={variant}>
                {children}
            </Inner>
        </ButtonContainer>
    )
}