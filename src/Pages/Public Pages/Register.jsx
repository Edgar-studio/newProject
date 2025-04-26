import React from 'react';

const Register = ({ isLogin, toggleForm }) => {
    return (
        <div className="relative w-full h-full z-0 signup">
            <form>
                <label
                    className={`flex justify-center text-white text-[2.3em] font-bold mt-12 cursor-pointer transition-transform duration-500 ease-in-out ${
                        isLogin ? 'scale-75' : 'scale-100'
                    }`}
                    onClick={toggleForm}
                >
                    Sign up
                </label>
                <input
                    type="text"
                    name="txt"
                    placeholder="User name"
                    required
                    className="w-3/5 h-8 bg-[#e0dede] mx-auto my-5 p-3 border-none outline-none rounded-md block text-base"
                />
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
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default Register;