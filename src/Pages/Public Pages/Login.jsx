import React from 'react';
import Input from "../../Components/UI/Input.jsx";
import {useForm} from "react-hook-form";
import useAuth from "../../Utils/useAuth.jsx";
import {emailValidation, passwordValidation} from "../../Utils/Validations.jsx";

const Login = ({ isLogin, toggleForm }) => {
    const {handleLogin} = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({ mode: 'all' });



    return (
        <div
            className={`absolute w-full h-[460px] bg-gray-200 
            rounded-[60%_/_10%] transition-transform duration-700 ease-in-out z-10 ${
                isLogin ? 'translate-y-[-500px]' : 'translate-y-[-180px]'
            }`}
        >
            <form onSubmit={handleSubmit(handleLogin)}>
                <label
                    className={`flex justify-center text-custom-dark text-[2.3em] 
                    font-bold mt-12 mb-10 cursor-pointer transition-transform duration-500 
                    ease-in-out ${
                        isLogin ? 'scale-100' : 'scale-75'
                    }`}
                    onClick={toggleForm}
                >
                    Login
                </label>
                <Input
                    type="text"
                    name='email'
                    placeholder="Email"
                    register={register}
                    validation={emailValidation}
                    error={errors.email && errors.email.message}
                />
                <Input
                    type="password"
                    name='password'
                    placeholder="Password"
                    register={register}
                    validation={passwordValidation}
                    error={errors.password && errors.password.message}
                />
                <button
                    disabled={!isValid}
                    type="submit"
                    className="w-3/5 h-10 mx-auto mt-8 block  bg-gradient-to-b
        from-[#0f0c29] via-[#302b63] to-[#24243e]
                    text-white font-bold text-base rounded-md border-none outline-none cursor-pointer hover:bg-custom-dark-hover transition-colors duration-200"
                >
                    Login
                </button>

                <div className="flex justify-center mt-4">
                    <p className="text-sm text-gray-700">
                        Don't have an account?{' '}
                        <span
                            onClick={toggleForm}
                            className="text-blue-500 hover:underline cursor-pointer"
                        >
                            Sign up
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
