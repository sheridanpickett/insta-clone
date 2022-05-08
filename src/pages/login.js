import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SIGNUP, PASSWORD_RESET } from '../constants/routes';
import Input from '../components/input';
import Button from '../components/button';
import HomeIphoneImage from '../components/homeIphoneImage';
import Footer from '../components/footer';
import Logo from '../images/logo.png';

export default function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="min-h-screen flex flex-col">
            <div className="flex justify-center min-h-[632px] mt-9 mx-7 pb-8">
                <div className="hidden m-lg:inline-block">
                    <HomeIphoneImage />
                </div>
                <div className="w-[350px] flex flex-col mt-3">
                    <div className="w-[350px] flex flex-col items-center border-app-gray-300 px-10 pt-11 pb-6 mb-2.5 x-sm:border x-sm:bg-white">
                        <img className="w-[175px] pb-9" src={Logo} alt="Instagram logo" />
                        <form className="flex flex-col w-full">
                            <div className="w-full mb-[6px]">
                                <Input value={login} onChange={e=>setLogin(e.target.value)} placeholder="Email Address or Username" name="email"/>
                            </div>
                            <div className="w-full mb-[14px]">
                                <Input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" name="password" type="password"/>
                            </div>
                            <Button variant="$form">Log in</Button>
                        </form>
                        <Link to={PASSWORD_RESET}>
                            <p className="text-xs text-facebookblue mt-6">Forgotten your password?</p>
                        </Link>
                    </div>
                    <div className="w-[350px] p-2.5 border-app-gray-300 x-sm:border x-sm:bg-white">
                        <p className="flex items-center justify-center m-3.5 text-[14px] leading-[18px]">
                            Don't have an account?&nbsp; <Link to={SIGNUP}><span className="text-cornflowerblue font-semibold">Sign up</span></Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}