import styled from 'styled-components';
import ModalUnstyled from '@mui/base/ModalUnstyled';

const ViewAll = styled.div`
    font-size: 14px;
    line-height: 18px;
    color: #8e8e8e;
    margin-bottom: 8px;
`

const ViewAllComments = ({commentsLength}) => {
    return <ViewAll>View all {commentsLength} comments</ViewAll>
}

export default ViewAllComments;