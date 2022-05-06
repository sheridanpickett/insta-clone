import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Dashboard from './pages/dashboard';
import Signup from './pages/signup';
import Login from './pages/login';
import PasswordReset from './pages/passwordReset';
import Profile from './pages/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.PASSWORD_RESET} element={<PasswordReset />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
