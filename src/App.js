import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Dashboard from './pages/dashboard';
import Signup from './pages/signup';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
