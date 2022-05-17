import Navigation from '../components/navigation';
import DashboardPostFeed from '../components/dashboardPostFeed';

export default function Dashboard() {
    
    return (
        <>
            <Navigation />
            <div className="flex justify-center">
                <DashboardPostFeed />
            </div>
        </>
    )
}