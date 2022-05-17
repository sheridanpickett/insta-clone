import UploadPhoto from './uploadPhoto';
import Logo from '../images/header-logo.png';

export default function Navigation() {

    return(
        <nav className="border-b border-app-gray-300 bg-white h-[60px]  px-5 flex justify-between items-center">
            <div className="h-9 flex items-end">
                <img className="w-24" src={Logo} alt="instagram logo" />
            </div>
            <UploadPhoto />
        </nav>
    )
}