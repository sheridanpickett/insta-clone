import Navigation from '../components/navigation';
import DashboardFeed from '../components/dashboardFeed';
import useAuth from '../context/useAuth';

export default function Dashboard() {
    const auth = useAuth();
    return (
        <>
            <Navigation />
            <div className="flex justify-center">
                <DashboardFeed />
            </div>
        </>
    )
}