import styled from 'styled-components';
import ProfilePicture from './profilePicture';

const Header = styled.header`
    height: 58px;
    width: 100%;
    border-bottom: 1px solid #efefef;
    display: flex;
    align-items: center;
    padding-left: 13px;
`

const OwnerName = styled.div`
    color: #262626;
    margin-left: 10px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
`

const PostHeader = ({owner}) => {
    return (
        <Header>
            <ProfilePicture variant="nav" />
            <OwnerName>
                {owner.displayName}
            </OwnerName>
        </Header>
    )
}

export default PostHeader;