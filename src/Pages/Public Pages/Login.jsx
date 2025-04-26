import React from 'react';

const Login = ({ isLogin, toggleForm }) => {
    return (
        <div
            className={`absolute w-full h-[460px] bg-gray-200 rounded-[60%_/_10%] transition-transform duration-700 ease-in-out z-10 ${
                isLogin ? 'translate-y-[-500px]' : 'translate-y-[-180px]'
            }`}
        >
            <form>
                <label
                    className={`flex justify-center text-custom-dark text-[2.3em] font-bold mt-12 cursor-pointer transition-transform duration-500 ease-in-out ${
                        isLogin ? 'scale-100' : 'scale-75'
                    }`}
                    onClick={toggleForm}
                >
                    Login
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-3/5 h-8 bg-[#e0dede] mx-auto my-5 p-3 border-none outline-none rounded-md block text-base"
                />
                <input
                    type="password"
                    name="pswd"
                    placeholder="Password"
                    required
                    className="w-3/5 h-8 bg-[#e0dede] mx-auto my-5 p-3 border-none outline-none rounded-md block text-base"
                />
                <button
                    type="submit"
                    className="w-3/5 h-10 mx-auto mt-8 block bg-custom-dark text-white font-bold text-base rounded-md border-none outline-none cursor-pointer hover:bg-custom-dark-hover transition-colors duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;