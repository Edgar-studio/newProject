import React from 'react';
import Input from "../../../Components/UI/Input.jsx";
import {useForm} from "react-hook-form";
import useAuth from "../../../Utils/useAuth.jsx";

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
            <h2 className='text-xl font-bold'>Add New User</h2>

            <Input
                register={register}
                type='text'
                placeholder='Enter username'
                label='Username'
                name='username'
                required
            />

            <Input
                register={register}
                type='email'
                placeholder='Enter email'
                label='Email'
                name='email'
                required
            />

            <Input
                register={register}

                type='password'
                placeholder='Enter password'
                label='Password'
                name='password'
                required
            />

            <button
                type='submit'
                className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'
            >
                Register
            </button>
        </form>
    );
};

export default AddUserModal;