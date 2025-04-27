import React from 'react';
import Input from "../../Components/UI/Input.jsx";
import { emailValidation, passwordValidation, usernameValidation } from "../../Utils/Validations.jsx";
import { useForm } from "react-hook-form";
import useAuth from "../../Utils/useAuth.jsx";

const Register = ({ isLogin, toggleForm }) => {
    const { handleRegister } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({ mode: 'onBlur' });

    return (
        <div className="relative w-full h-full z-0 signup">
            <form onSubmit={handleSubmit(handleRegister)}>
                <label
                    className={`flex justify-center text-white text-[2.3em] 
                    font-bold mt-12 cursor-pointer transition-transform duration-500 
                    ease-in-out ${
                        isLogin ? 'scale-75' : 'scale-100'
                    }`}
                    onClick={toggleForm}
                >
                    Sign up
                </label>
                <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    register={register}
                    validation={usernameValidation}
                    error={errors.username && errors.username.message}
                />
                <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    register={register}
                    validation={emailValidation}
                    error={errors.email && errors.email.message}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    register={register}
                    validation={passwordValidation}
                    error={errors.password && errors.password.message}
                />
                <button
                    disabled={!isValid}
                    type="submit"
                    className="w-3/5 h-10 mx-auto mt-8 block bg-gradient-to-r from-[#7d20f7] via-[#3958e3] to-[#3f0096] hover:brightness-90 text-white font-bold text-base rounded-md border-none outline-none cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default Register;