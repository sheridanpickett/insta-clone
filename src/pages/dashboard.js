import Navigation from '../components/navigation';
import DashboardPostFeed from '../components/dashboardPostFeed';
import useAuth from '../context/useAuth';

export default function Dashboard() {
    const auth = useAuth();
    return (
        <>
            <Navigation />
            <div className="flex justify-center">
                <DashboardPostFeed />
            </div>
        </>
    )
}