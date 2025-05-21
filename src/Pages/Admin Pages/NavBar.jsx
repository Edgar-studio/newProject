import React from 'react';
import { adminRoutes } from '../../Utils/Routes.jsx';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="bg-gradient-to-bl from-blue-600 via-purple-500 to-black-500 text-white w-1/8 min-h-[75vh]">
            <ul>
                {adminRoutes
                    .filter((route) => route.name !== 'Admin Page') // Optionally exclude the default Admin Page
                    .map((route) => (
                        <li key={route.path} className="p-2">
                            <Link to={`/admin/${route.page}`}>{route.name}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default NavBar;