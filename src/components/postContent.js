import styled from 'styled-components';

const Content = styled.div`
    width: auto;
    position: relative;
    ${({aspectRatio}) => {
        switch(aspectRatio) {
            case 'standard':
                return 'padding-bottom: 100%;'
            case 'portrait':
                return 'padding-bottom: 125%;'
            case 'landscape':
                return 'padding-bottom: 56.25%;'
            default:
                return 'padding-bottom: 100%;'
        }
    }}}
`

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`

const PostContent = ({aspectRatio, imageKey}) => {
    return (
        <Content aspectRatio={aspectRatio}>
            <Image src={`${process.env.REACT_APP_BACKEND}/images/${imageKey}`} alt="" />
        </Content>
    )
}

export default PostContent;