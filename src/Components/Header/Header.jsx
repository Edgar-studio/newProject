import React from 'react';
import Menu from "./Menu.jsx";

import SettingsDropdown from "./SettingsDropdown.jsx";

const Header = () => {
    // const {theme, toggleTheme} = useTheme();

    const token = localStorage.getItem("token");
    // function handleLogout() {
    //     localStorage.removeItem('token');
    //     window.location.reload();
    // }
    // const changeLanguage = (lang) => {
    //     i18n.changeLanguage(lang);
    // }
    return (
        <header className={`h-[10vh] w-full bg-gray-500 text-white flex items-center dark:bg-black
             px-6 shadow-md ${token === 'isAdmin' ? 'justify-center' : 'justify-between' }  `}>
            { token !=='isAdmin' && <Menu />}
            <div className="flex space-x-4">


        {/*        <div*/}
        {/*            onClick={toggleTheme}*/}
        {/*            className="w-20 h-10 flex items-center justify-between bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300"*/}
        {/*        >*/}
        {/*            <div*/}
        {/*                className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500*/}
        {/*${theme === "dark" ? "translate-x-10 bg-yellow-400" : "translate-x-0 bg-gray-500"}`}*/}
        {/*                style={{ transform: theme === 'dark' ? 'translateX(40px)' : 'translateX(0)' }}*/}
        {/*            >*/}
        {/*                {theme === "dark" ? (*/}
        {/*                    <IoSunny className="text-white text-xl" />*/}
        {/*                ) : (*/}
        {/*                    <IoMoon className="text-white text-xl" />*/}
        {/*                )}*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <button*/}
        {/*            className="dark:border-green-500 px-3"*/}
        {/*            onClick={()=>{*/}
        {/*                changeLanguage('hy')*/}
        {/*            }}*/}
        {/*        >Arm</button>*/}
        {/*        <button*/}
        {/*            className="dark:border-green-500 px-3"*/}
        {/*            onClick={()=>{*/}
        {/*                changeLanguage('en')*/}
        {/*            }}*/}
        {/*        >Eng</button>*/}
        {/*        <button*/}
        {/*            className="dark:border-green-500 px-3"*/}
        {/*            onClick={()=>{*/}
        {/*                changeLanguage('cz')*/}
        {/*            }}*/}
        {/*        >Cze</button>*/}



        {/*        <Admin_Modal />*/}
        {/*        <button*/}
        {/*            onClick={handleLogout}*/}
        {/*            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md*/}
        {/*             font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"*/}
        {/*        >*/}
        {/*            Logout*/}
        {/*        </button>*/}
                <SettingsDropdown />


            </div>
        </header>
    );
};

export default Header;