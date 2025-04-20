import React from 'react';
import {useNavigate} from "react-router-dom";
import {ABOUT_PAGE} from "../../Utils/Routes.jsx";

const Header = () => {
    const navigate = useNavigate();
    function handleClick() {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return (
        <div className='h-[10vh] w-full bg-gray-500 text-white'>
            Header

            <button
            onClick={handleClick}
            >
                Logout
            </button>

            <button onClick={() => navigate(ABOUT_PAGE)}>
                About
            </button>
        </div>
    );
};

export default Header;