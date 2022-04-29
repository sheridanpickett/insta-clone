import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { LOGIN } from '../constants/routes';
import FormInput from '../components/formInput';
import FormButton from '../components/formButton';
import Logo from '../images/logo.png';

export default function Signup() {

    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return(
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="flex flex-col w-[350px] px-10 py-11 mb-2.5 items-center border-app-gray-300 x-sm:border x-sm:bg-white">
                <img className="w-[175px] pb-2.5" src={Logo} alt="Instagram logo" />
                <p className="font-semibold text-[17px] text-app-gray-500 text-center pb-7">Sign up to see photos and videos from your friends.</p>
                <form className="flex flex-col w-full">
                    <FormInput onChange={e=>setEmail(e.target.value)} value={email} placeholder="Email Address" />
                    <FormInput onChange={e=>setFullName(e.target.value)} value={fullName} placeholder="Full Name" />
                    <FormInput onChange={e=>setUsername(e.target.value)} value={username} placeholder="Username" />
                    <FormInput onChange={e=>setPassword(e.target.value)} value={password} placeholder="Password" />
                    <FormButton type="submit" disabled={false}>Next</FormButton>
                </form>
                <p className="text-[12px] text-center leading-[16px] mt-4 text-app-gray-500">
                    By signing up, you agree to our <span className="font-semibold">Terms</span>. 
                    Learn how we collect, use and share your data in our <span className="font-semibold">Data Policy</span>, 
                    and how we use cookies and similar technology in our <span className="font-semibold">Cookie Policy</span>.
                </p>
            </div>
            <div className="w-[350px] p-2.5 border-app-gray-300 x-sm:border x-sm:bg-white">
                <p className="flex items-center justify-center m-3.5 text-[14px]">
                    Have an account?&nbsp; <Link to={LOGIN}><span className="text-cornflowerblue">Log in</span></Link>
                </p>
            </div>
        </div>
    )
}