import Button from './button';
import useAuth from '../context/useAuth';

const Logout = () => {
    const auth = useAuth();
    return (
        <Button onClick={async ()=>{
            await auth.signout();
        }}>Log out</Button>
    )
}

export default Logout;