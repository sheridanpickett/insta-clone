import UploadPhoto from './uploadPhoto';
import Logo from '../images/header-logo.png';
import Logout from './logout';
import ProfilePicture from './profilePicture';

export default function Navigation() {

    return(
        <nav className="border-b border-app-gray-300 bg-white h-[60px]  px-5 flex justify-between items-center">
            <div className="h-9 flex items-end">
                <img className="w-24" src={Logo} alt="instagram logo" />
            </div>
            <Logout/>
            <div className="flex">
                <UploadPhoto />
                <div className="ml-[22px]">
                    <ProfilePicture variant="nav"/>
                </div>
            </div>
        </nav>
    )
}