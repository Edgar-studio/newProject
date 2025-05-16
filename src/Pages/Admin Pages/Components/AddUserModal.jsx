import React from 'react';
import Input from "../../../Components/UI/Input.jsx";
import {useForm} from "react-hook-form";
import useAuth from "../../../Utils/useAuth.jsx";
import {emailValidation, passwordValidation, usernameValidation} from "../../../Utils/Validations.jsx";

const AddUserModal = () => {

    const {handleRegister} = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({ mode: 'all' });

    return (

        <form
            onSubmit={handleSubmit(handleRegister)}
            className='w-full h-full bg-yellow-200 flex flex-col gap-4 p-6'>

            <h2 className='text-xl font-bold mx-auto content-center'>Add New User</h2>

            <Input
                register={register}
                error={errors.username && errors.username.message}
                validation={usernameValidation}
                type='text'
                placeholder='Enter username'
                name='username'
            />

            <Input
                register={register}
                error={errors.email && errors.email.message}
                validation={emailValidation}
                type='email'
                placeholder='Enter email'
                name='email'
            />

            <Input
                register={register}
                error={errors.password && errors.password.message}
                validation={passwordValidation}
                type='password'
                placeholder='Enter password'
                name='password'
            />

            <button
                disabled={!isValid}
                type='submit'
                className='bg-blue-500 text-white py-2 px-4 rounded
                 hover:bg-blue-600 transition mx-auto content-center'
            >
                Register
            </button>
        </form>
    );
};

export default AddUserModal;