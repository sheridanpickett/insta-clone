import AuthContext from '../context/authContext';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [preventRedirect, setPreventRedirect] = useState(false);
    const auth = getAuth();

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            if(user && !preventRedirect) {
                setCurrentUser(user);
            } else {
                setPreventRedirect(true);
            }
        });
        return unsubscribe;
    },[preventRedirect, setPreventRedirect, setCurrentUser])


    const signup = async (email, password, username, fullName) => {
        //create user, then add displayName, then create entry for user in "users" db and add fullName.
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log('signing up');
            setCurrentUser(userCredentials.currentUser)

        } catch(error) {
            console.log(error);
        }
    }

    const signin = async (email, password) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            console.log('signing in');
            console.log(userCredentials);
            setCurrentUser(userCredentials.user)
        } catch(error) {
            console.log(error);
        }
    }

    const signout = async () => {
        await auth.signOut();
        console.log('signing out');
        setCurrentUser(null);
    }

    const value = {currentUser, signup, signin, signout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;