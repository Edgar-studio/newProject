import React from 'react';
import Input from "../../../Components/UI/Input.jsx";

const AddUserModal = () => {
    return (
        <form className='w-full h-full bg-yellow-200 flex flex-col gap-4 p-6'>
            <h2 className='text-xl font-bold'>Add New User</h2>

            <Input
                type='text'
                placeholder='Enter username'
                label='Username'
                name='username'
                required
            />

            <Input
                type='email'
                placeholder='Enter email'
                label='Email'
                name='email'
                required
            />

            <Input
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