import React from 'react';
import { NavLink } from 'react-router-dom';
import { privateRoutes } from '../../Utils/Routes.jsx';
import {useTranslation} from "react-i18next";

const Menu = () => {
    const {t} = useTranslation();
    const menuItems = privateRoutes.filter(route => route.name && route.menu === true);

    return (
        <nav className="flex justify-center items-center ">
            <ul className="flex items-center gap-5 list-none">
                {/* Logo */}
                <li>
                    <NavLink
                        to="/"
                        className="relative text-white text-lg px-2 py-1 no-underline transition-colors duration-600
                after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0
                after:left-0 after:rounded after:transition-transform after:duration-600
                hover:after:scale-x-100">
                        <i className="fa-brands fa-pied-piper-alt"></i>
                    </NavLink>
                </li>

                {/* Menu Items from privateRoutes */}
                {menuItems.map((menuElement) => (
                    <li key={menuElement.path}>
                        <NavLink
                            to={menuElement.path}
                            className={({ isActive }) =>
                                `relative text-white text-lg px-2 py-1 
                                no-underline transition-colors duration-600  
                 ${isActive ? 'after:scale-x-100 after:bg-white' : 'after:scale-x-0 after:bg-white'}
                after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 
                after:left-0 after:rounded after:transition-transform after:duration-600 
                hover:after:scale-x-100`
                            }
                        >
                            {t(menuElement.name)}
                        </NavLink>
                    </li>
                ))}

                {/* Hire Me Button */}
            {/*    <li>*/}
            {/*        <NavLink*/}
            {/*            to="/contact"*/}
            {/*            className="flex items-center bg-white text-black rounded px-2 py-1 transition-all"}
            {/*duration-600 hover:bg-transparent hover:text-white hover:px-2 hover:py-1"*/}
            {/*        >*/}
            {/*            <i className="fa-regular fa-envelope mr-2"></i>*/}
            {/*            Hire me*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            </ul>
        </nav>
    );
};

export default Menu;