import React, { useState } from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useTheme } from "../../Utils/ThemeContext.jsx"; // or your theme context path
import i18n from "../../../i18n.js";
import Admin_Modal from "./Admin_Modal.jsx"; // path to your i18n instance

const SettingsDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    function handleLogout() {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return (
        <div className="z-50 relative inline-block text-left">
            <IoSettingsSharp
                onClick={() => setIsOpen(!isOpen)}
                className='text-4xl m-2 cursor-pointer hover:text-blue-300'
            />
            {isOpen && (
                <div className="absolute right-0 mt-2 w-[250px] rounded-md shadow-lg bg-white p-5
                dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-2 px-3">
                        {/* Theme Switch */}
                        <div
                            onClick={toggleTheme}
                            className="w-20 h-10 flex items-center justify-between bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300"
                        >

                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500
                                    ${theme === "dark" ? "translate-x-10 bg-yellow-400" : "translate-x-0 bg-gray-500"}`}
                                style={{ transform: theme === 'dark' ? 'translateX(40px)' : 'translateX(0)' }}
                            >
                                {theme === "dark" ? (
                                    <IoSunny className="text-white text-xl" />
                                ) : (
                                    <IoMoon className="text-white text-xl" />
                                )}
                            </div>
                        </div>

                        {/* Language Switch */}
                        <div className="flex justify-between my-2 gap-2">
                            <button
                                className='border-0'
                                onClick={() => changeLanguage('hy')}
                                >
                                <img
                                    className='w-[43px]'
                                    src="../../../public/Icons/Flags/armenia.png"/>
                            </button>
                            <button
                                onClick={() => changeLanguage('en')}
                                className='border-0'>
                                <img
                                    className='w-[43px]'
                                    src="../../../public/Icons/Flags/united-states.png"/>
                            </button>
                            <button
                                onClick={() => changeLanguage('cz')}
                                className='border-0'>
                                <img
                                    className='w-[43px]'
                                    src="../../../public/Icons/Flags/czech-republic.png"/>
                            </button>
                        </div>

                        {/* Admin Modal */}
                        <div className="mb-2">
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white
                                px-3 py-1 rounded text-sm"><Admin_Modal/></button>
                        </div>

                        {/* Logout */}
                        <button
                            onClick={handleLogout}
                            className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SettingsDropdown;
