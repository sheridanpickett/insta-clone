import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './providers/authProvider';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import * as ROUTES from './constants/routes';
import Dashboard from './pages/dashboard';
import Signup from './pages/signup';
import Login from './pages/login';
import PasswordReset from './pages/passwordReset';
import Profile from './pages/profile';

function App() {
    const [auth, setAuth] = useState({user: false});
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                <Route path={ROUTES.LOGIN} element={
                    <PublicRoute auth={auth}>
                        <Login />
                    </PublicRoute>
                } />
                <Route path={ROUTES.SIGNUP} element={
                    <PublicRoute auth={auth}>
                        <Signup />
                    </PublicRoute>
                } />
                <Route path={ROUTES.PASSWORD_RESET} element={
                    <PublicRoute auth={auth}>
                        <PasswordReset />
                    </PublicRoute>
                } />
                <Route path={ROUTES.PROFILE} element={<Profile />} />
                <Route path={ROUTES.DASHBOARD} element={
                    <PrivateRoute auth={auth}>
                        <Dashboard />
                    </PrivateRoute>
                } />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
