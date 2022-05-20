import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../context/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN, DASHBOARD } from '../constants/routes';
import FormInput from '../components/formInput';
import Button from '../components/button';
import Logo from '../images/logo.png';

export default function Signup() {

    const auth = useAuth();
    const navigate = useNavigate();
    const [focusedFields, setFocusedFields] = useState({
        current: null,
        previous: []
    })
    const [showMessage, setShowMessage] = useState(true);
    const [errorMessages, setErrorMessages] = useState([]);
    const [signupResult, setSignupResult] = useState({
        email: {
            hasError: false,
            message: "",
            accepted: false
        },
        fullName: {
            hasError: false,
            message: "",
            accepted: false
        },
        username: {
            hasError: false,
            message: "",
            accepted: false
        },
        password: {
            hasError: false,
            message: "",
            accepted: false
        }
    })
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async e => {
        e.preventDefault();
        setShowMessage(false);
        const res = await getSignUpResults(false);
        if(true) {
            await auth.signup(email, password);
        }
    }

    const addToFocusedFields = ({target}) => {
        let previousFields = [...focusedFields.previous];
        if(!(previousFields.includes(target.name))) {
            previousFields.push(target.name);
        }
        setFocusedFields({current: target.name, previous: previousFields});
    }

    const removeFromFocusedFields = () => {
        setFocusedFields({current: null, previous: [...focusedFields.previous]});
    }

    const getSignUpResults = async (wasDryRun) => {
        const res = await axios.post(`${process.env.REACT_APP_API_SERVER_URL}/accounts/create_user`,{wasDryRun,email,fullName,username,password}, {withCredentials: true});
        const errorFields = res.data.errors.map(field=>field.label);
        const setFieldValues = fieldName => {
            let field = {};
            if(!(focusedFields.previous.includes(fieldName))) {
                field.hasError = false;
                field.accepted = false;
            } else {
                if(errorFields.includes(fieldName)) {
                    field.hasError = true;
                    field.accepted = false;
                } else {
                    field.hasError = false;
                    field.accepted = true;
                }
            }
            return field;
        }
        let newSignupResult = {
            email: setFieldValues('email'),
            fullName: setFieldValues('fullName'),
            username: setFieldValues('username'),
            password: setFieldValues('password')
        };
        setSignupResult(newSignupResult);
        const messages = res.data.errors.map(field=>field.message);
        setErrorMessages(messages);
    }

    useEffect(() => {
        const TimeoutId = setTimeout(async () => {
            if(email || fullName || username || password) {
                getSignUpResults(true);
            }
        }, 1000)
        return () => clearTimeout(TimeoutId)
    }, [email, fullName, username, password])


    return(
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="flex flex-col w-[350px] px-10 py-11 mb-2.5 items-center border-app-gray-300 x-sm:border x-sm:bg-white">
                <img className="w-[175px] pb-2.5" src={Logo} alt="Instagram logo" />
                <p className="font-semibold text-[17px] text-app-gray-500 text-center pb-7">Sign up to see photos and videos from your friends.</p>
                <form className="flex flex-col w-full items-center" onSubmit={handleSubmit}>
                    <div className="w-full mb-[6px]">
                        <FormInput
                            value={email} 
                            accepted={signupResult.email.accepted} 
                            hasError={signupResult.email.hasError} 
                            onFocus={addToFocusedFields}
                            onBlur={e=>{removeFromFocusedFields(e); getSignUpResults(true)}} 
                            onChange={e=>setEmail(e.target.value)} 
                            placeholder="Email Address" 
                            name="email" 
                            type="email" />
                    </div>
                    <div className="w-full mb-[6px]">
                        <FormInput
                            value={fullName} 
                            accepted={signupResult.fullName.accepted} 
                            hasError={signupResult.fullName.hasError} 
                            onFocus={addToFocusedFields}
                            onBlur={e=>{removeFromFocusedFields(e); getSignUpResults(true)}} 
                            onChange={e=>setFullName(e.target.value)} 
                            placeholder="Full Name"
                            name="fullName" />
                    </div>
                    <div className="w-full mb-[6px]">
                        <FormInput
                            value={username} 
                            accepted={signupResult.username.accepted} 
                            hasError={signupResult.username.hasError} 
                            onFocus={addToFocusedFields} 
                            onBlur={e=>{removeFromFocusedFields(e); getSignUpResults(true)}} 
                            onChange={e=>setUsername(e.target.value)} 
                            placeholder="Username"
                            name="username" />
                    </div>
                    <div className="w-full mb-[14px]">
                        <FormInput
                            value={password} 
                            accepted={signupResult.password.accepted} 
                            hasError={signupResult.password.hasError} 
                            onFocus={addToFocusedFields} 
                            onBlur={e=>{removeFromFocusedFields(e); getSignUpResults(true)}} 
                            onChange={e=>setPassword(e.target.value)} 
                            placeholder="Password"
                            name="password" 
                            type="password" />
                    </div>
                    <div className="mb-[8px] w-full">
                        <Button variant="form" type="submit" disabled={!(email && fullName && username && password)}>Next</Button>
                    </div>
                    {
                        (!showMessage && errorMessages.length > 0) &&
                        <p className="text-red-error text-center text-[14px] leading-[18px] my-[10px]">
                            {errorMessages[0]}
                        </p>
                    }
                </form>
                <p className="text-[12px] text-center leading-[16px] mt-[10px] text-app-gray-500">
                    By signing up, you agree to our <span className="font-semibold">Terms</span>. 
                    Learn how we collect, use and share your data in our <span className="font-semibold">Data Policy</span>, 
                    and how we use cookies and similar technology in our <span className="font-semibold">Cookie Policy</span>.
                </p>
            </div>
            <div className="w-[350px] p-2.5 border-app-gray-300 x-sm:border x-sm:bg-white">
                <p className="flex items-center justify-center m-3.5 text-[14px]">
                    Have an account?&nbsp; <Link to={LOGIN}><span className="text-cornflowerblue font-semibold">Log in</span></Link>
                </p>
            </div>
            <button onClick={async () => {
                const res = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/accounts/welcome`, {withCredentials: true});
                console.log(res);
            }}>Check</button>
        </div>
    )
}