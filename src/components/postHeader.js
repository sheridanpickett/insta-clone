import styled from 'styled-components';
import Avatar from './avatar';

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
            <Avatar variant="nav" />
            <OwnerName>
                {owner.username}
            </OwnerName>
        </Header>
    )
}

export default PostHeader;