import React, {useEffect, useState} from 'react';
import {useRoutes} from "react-router-dom";
import {adminRoutes, privateRoutes, publicRoutes} from "../Utils/Routes.jsx";

const Pages = () => {
    const token = localStorage.getItem('token');


    return (
        <div className={` w-full  ${token ? 'min-h-[75vh]' : 'min-h-screen'}`}>

            {useRoutes(token !== 'isAdmin' && token ? privateRoutes : token === "isAdmin" ? adminRoutes : publicRoutes)}
        </div>
    );
};

export default Pages;