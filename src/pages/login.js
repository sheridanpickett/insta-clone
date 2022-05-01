import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, PASSWORD_RESET } from '../constants/routes';
import FormInput from '../components/formInput';
import FormButton from '../components/formButton';
import HomeIphoneImage from '../components/homeIphoneImage';
import Footer from '../components/footer';
import Logo from '../images/logo.png';

export default function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="h-screen flex flex-col">
            <div className="flex justify-center p-8">
                <HomeIphoneImage />
                <div className="w-[350px] mt-3">
                    <div className="flex flex-col items-center border-app-gray-300 px-10 py-11 mb-2.5 x-sm:border x-sm:bg-white">
                        <img className="w-[175px] pb-9" src={Logo} alt="Instagram logo" />
                        <FormInput value={login} onChange={e=>setLogin(e.target.value)} placeholder="Email Address or Username" name="username"/>
                        <FormInput value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" name="password" type="password"/>
                        <FormButton>Log in</FormButton>
                        <Link to={PASSWORD_RESET}>
                            <p className="text-sm text-facebookblue mt-5">Forgotten you password?</p>
                        </Link>
                    </div>
                    <div className="p-2.5 border-app-gray-300 x-sm:border x-sm:bg-white">
                        <p className="flex items-center justify-center m-3.5 text-[14px] leading-[18px]">
                            Don't have an account?&nbsp; <Link to={LOGIN}><span className="text-cornflowerblue font-semibold">Sign up</span></Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}