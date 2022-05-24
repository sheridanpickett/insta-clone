import UploadPhoto from './createPost';
import Logo from '../images/header-logo.png';
import Avatar from './avatar';
import ProfileMenu from './profileMenu';

export default function Navigation() {
    return(
        <nav className="border-b border-app-gray-300 bg-white flex justify-center">
            <div className="max-w-[975px] px-5 flex grow justify-between items-center h-[60px]">
                <div className="h-9 flex items-end">
                    <img className="w-24" src={Logo} alt="instagram logo" />
                </div>
                <div className="flex items-center stretch relative">
                    <UploadPhoto />
                    <ProfileMenu>
                        <div className="ml-[22px]">
                            <Avatar variant="nav"/>
                        </div>
                    </ProfileMenu>
                </div>
            </div>
        </nav>
    )
}