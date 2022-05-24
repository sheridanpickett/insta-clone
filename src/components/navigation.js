import styled from 'styled-components';
import UploadPhoto from './createPost';
import Logo from '../images/header-logo.png';
import Avatar from './avatar';
import ProfileMenu from './profileMenu';
import { Link } from 'react-router-dom';
import { DASHBOARD } from '../constants/routes';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as HeartIcon } from '../images/heart.svg';
import { ReactComponent as MessageIcon } from '../images/messages.svg';
import { ReactComponent as ExploreIcon } from '../images/explore.svg';

const IconContainer = styled.div`
    margin-left: 22px;
`

export default function Navigation() {
    return(
        <nav className="border-b border-app-gray-300 bg-white flex justify-center">
            <div className="max-w-[975px] px-5 flex grow justify-between items-center h-[60px]">
                <div className="h-9 flex items-end">
                    <Link to={DASHBOARD}>
                        <img className="w-24" src={Logo} alt="instagram logo" />
                    </Link>
                </div>
                <div className="flex items-center stretch relative">
                    <IconContainer>
                        <HomeIcon />
                    </IconContainer>
                    <IconContainer>
                        <MessageIcon />
                    </IconContainer>
                    <IconContainer>
                        <UploadPhoto />
                    </IconContainer>
                    <IconContainer>
                        <ExploreIcon />
                    </IconContainer>
                    <IconContainer>
                        <HeartIcon />
                    </IconContainer>
                    <IconContainer>
                        <ProfileMenu>
                            <Avatar variant="nav" />
                        </ProfileMenu>
                    </IconContainer>
                </div>
            </div>
        </nav>
    )
}