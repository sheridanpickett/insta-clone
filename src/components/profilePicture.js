import styled, {css} from 'styled-components';

const Container = styled.div`
    border: 1px solid rgba(0,0,0,.0975);
    border-radius: 50%;
    background-color: #fafafa;
    ${({variant}) => {
        switch(variant) {
            case 'nav':
                return css`
                    height: 24px;
                    width: 24px;
                `
            case 'post':
                return css`
                    height: 32px;
                    width: 32px;
                `
            default:
                return css`
                    height: 32px;
                    width: 32px;
                `
        }
    }}
`

const ProfilePicture = ({...props}) => {
    return (
        <Container {...props}>
        </Container>
    )
}

export default ProfilePicture;