import useAuth from '../context/useAuth';
import { useLocation, Navigate } from 'react-router-dom';
import { LOGIN } from '../constants/routes';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const auth = useAuth();
    if(!auth || !auth.currentUser) {
        return <Navigate to={LOGIN} state={{from: location}} replace />
    } else {
        return children;
    }
}

export default PrivateRoute;