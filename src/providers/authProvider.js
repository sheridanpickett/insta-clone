import AuthContext from '../context/authContext';
import { useState } from 'react';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const signin = () => {
        return null
    }

    const signout = () => {
        return null
    }

    const value = {user, signin, signout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;