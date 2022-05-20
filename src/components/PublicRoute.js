import useAuth from '../context/useAuth';
import { Navigate } from 'react-router-dom';
import {DASHBOARD} from '../constants/routes';

const PublicRoute = ({children}) => {
    const auth = useAuth();
    if(auth && auth.currentUser) {
        return <Navigate to={DASHBOARD} replace />
    } else {
        return children;
    }
}

export default PublicRoute;