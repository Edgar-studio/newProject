import React from 'react';
import {useRoutes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../Utils/Routes.jsx";

const Pages = () => {
    const token = localStorage.getItem('token');
    return (
        <div className={` w-full  ${token ? 'min-h-[80vh]' : 'min-h-screen'}`}>

            {useRoutes(token ? privateRoutes : publicRoutes)}
        </div>
    );
};

export default Pages;