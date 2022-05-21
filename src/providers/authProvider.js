import AuthContext from '../context/authContext';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [preventRedirect, setPreventRedirect] = useState(false);
    const auth = getAuth();

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(auth=>{
            if(auth && !preventRedirect) {
                setCurrentUser(auth);
            } else {
                setPreventRedirect(true);
            }
        });
        return unsubscribe;
    },[preventRedirect, setPreventRedirect, setCurrentUser])


    const signup = async (email, password, username, fullName) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: username
            });
            await axios.post(`${process.env.REACT_APP_BACKEND}/accounts/signup`, {
                uid: userCredential.user.uid,
                fullName
            });
            setCurrentUser(userCredential.user);
        } catch(error) {
            console.log(error);
        }
    }

    const signin = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userData = await axios.get(`${process.env.REACT_APP_BACKEND}/accounts/user_data?uid=${userCredential.user.uid}`)
            setCurrentUser({
                userCredential: userCredential.user,
                userData
            })
        } catch(error) {
            auth.signout();
            console.log(error);
        }
    }

    const signout = async () => {
        await auth.signOut();
        setCurrentUser(null);
    }

    const value = {currentUser, signup, signin, signout }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;