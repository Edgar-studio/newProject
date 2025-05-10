import React, {useState} from 'react';
import Menu from "./Menu.jsx";
import Admin_Modal from "./Admin_Modal.jsx";

const Header = () => {

    function handleLogout() {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <div className="h-[10vh] w-full bg-gray-800 text-white flex items-center
         justify-between px-6 shadow-md">
           <Menu />
            <div className="flex space-x-4">
                <Admin_Modal />
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md
                     font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Logout
                </button>



            </div>
        </div>
    );
};

export default Header;