import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
