import React, {useState} from 'react';
import Input from "../UI/Input.jsx";
import {passwordValidation} from "../../Utils/Validations.jsx";
import {useForm} from "react-hook-form";
import useAuth from "../../Utils/useAuth.jsx";

const AdminModal = () => {
    const {handleAdminLogin} = useAuth()
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem('token');
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({ mode: 'all' });

    return (
        <div>
            {token === "isAdmin" && <button
                className='p-2 bg-gray-400 text-white font-bold text-xl'

                onClick={()=>{
                    localStorage.setItem("token", 'Admin');
                    window.location.reload();
                }}
            >
             Exit From Admin
            </button>}

            {token === "Admin" && <button
                className='p-2 bg-gray-400 text-white font-bold text-xl'

                onClick={()=>{
                    setIsOpen(!isOpen);
                }}
            >
                Admin Page
            </button>}

            {
                isOpen &&  <div
                    className='absolute top-0 left-0 w-full h-screen flex justify-center items-center'
                >
                    <form
                        onSubmit={handleSubmit(handleAdminLogin)}
                        className='bg-cyan-600 text-black text-2xl
                     w-1/3 h-1/3 flex items-center justify-center flex-col gap-4' >
                         <span>
                        Enter Your Password
                         </span>
                        <Input
                            type="password"
                            name='password'
                            placeholder="Password"
                            register={register}
                            validation={passwordValidation}
                            error={errors.password && errors.password.message}
                        />
                        <button
                        type={'submit'}
                        >
                            Submit
                        </button>
                    </form>

                </div>
            }

        </div>
    );
};

export default AdminModal;