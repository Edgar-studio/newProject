import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { adminRoutes } from '../../Utils/Routes.jsx';
import NavBar from './NavBar.jsx';

const AdminPage = () => {
    const { page } = useParams(); // Get the :page parameter from the URL

    // Find the matching route based on the page parameter
    let selectedRoute = adminRoutes.find((route) => route.page === page);

    // Fallback to a default component if no route is found
    const ContentComponent = selectedRoute ? selectedRoute.element : <div>Page Not Found</div>;

    return (
        <div className="flex">
            <NavBar />
            <div className="w-full h-[80vh] bg-amber-300">{ContentComponent}</div>
        </div>
    );
};

export default AdminPage;