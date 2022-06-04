import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './providers/authProvider';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';
import * as ROUTES from './constants/routes';
import Dashboard from './pages/dashboard';
import Signup from './pages/signup';
import Login from './pages/login';
import PasswordReset from './pages/passwordReset';
import Profile from './pages/profile';
import PostPage from './pages/postPage';
import firebaseApp from './services/firebase';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                <Route path={ROUTES.LOGIN} element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
                <Route path={ROUTES.SIGNUP} element={
                    <PublicRoute>
                        <Signup />
                    </PublicRoute>
                } />
                <Route path={ROUTES.PASSWORD_RESET} element={
                    <PublicRoute>
                        <PasswordReset />
                    </PublicRoute>
                } />
                <Route path={`${ROUTES.POST}/:postId`} element={<PostPage />} />
                <Route path={`${ROUTES.PROFILE}/:uid`} element={<Profile />} />
                <Route path={ROUTES.DASHBOARD} element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
