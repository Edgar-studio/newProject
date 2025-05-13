import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { adminRoutes } from '../../Utils/Routes.jsx';
import NavBar from './NavBar.jsx';

const AdminPage = () => {
    const { page } = useParams();


    let selectedRoute = adminRoutes.find((route) => route.page === page);


    const ContentComponent = selectedRoute ? selectedRoute.element : <div>Page Not Found</div>;

    return (
        <div className="flex">
            <NavBar />
            <div className="w-full min-h-[80vh] bg-amber-300">{ContentComponent}</div>
        </div>
    );
};

export default AdminPage;