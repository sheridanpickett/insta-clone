import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SIGNUP, LOGIN } from '../constants/routes';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import FormInput from '../components/formInput';
import Button from '../components/button';
import Sprites from '../images/sprites.png';

const KeyIcon = styled.span`
    display: block;
    height: 96px;
    width: 96px;
    background-image: url(${Sprites});
    background-size: 440px 411px;
    background-position: -129px 0;
`

export default function PasswordReset() {
    console.log(Sprites)
    const [value, setValue] = useState('');
    return (
        <div>
            <Navigation />
            <div className="flex flex-col items-center w-[388px] h-[522px] mt-[50px] mb-[38px] mx-auto border border-app-gray-300 bg-white rounded">
                <div className="flex flex-col items-center px-[44px]">
                    <div className="mt-[24px] mb-[16px]">
                        <KeyIcon/>
                    </div>
                    <h4 className="text-[16px] leading-[24px] mb-[6px] font-semibold text-app-gray-700">Trouble with logging in?</h4>
                    <p className="mb-[12px] text-app-gray-500 text-center text-[14px] leading-[18px]">
                        Enter your email address or username and we'll send you a link to get back in to your account.
                    </p>
                    <div className="w-full mb-[16px]">
                        <FormInput variant="$secondary" value={value} onChange={e=>setValue(e.target.value)} placeholder="Email address or username"  name="email" />

                    </div>
                    <Button variant="form">Send login link</Button>
                    <div className="mt-[32px] mb-[16px] flex items-center w-full">
                        <div className="w-full bg-app-gray-300 h-[1px]" />
                        <div className="text-app-gray-500 text-[13px] mx-[18px] leading-[16px] font-semibold">OR</div>
                        <div className="w-full bg-app-gray-300 h-[1px]" />
                    </div>
                    <p>
                        <Link to={SIGNUP}>
                            <span className="text-app-gray-700 text-[14px] font-semibold">Create New Account</span>
                        </Link>
                    </p>
                </div>
                <div className="mt-auto border border-t-app-gray-300 bg-app-gray-100 flex justify-center items-center h-[42px] w-full">
                    <p>
                        <Link to={LOGIN}>
                            <span className="text-app-gray-700 text-[14px] font-semibold">Back to Login</span>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="p-1" />
            <Footer />
        </div>
    )
}