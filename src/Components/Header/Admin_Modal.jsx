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
                className='w-full bg-blue-500 hover:bg-blue-600 text-white
                                px-3 py-1 rounded text-sm'

                onClick={()=>{
                    localStorage.setItem("token", 'Admin');
                    window.location.reload();
                }}
            >
             Exit From Admin
            </button>}

            {token === "Admin" && !isOpen ? <button
                className=' border-0 w-full bg-blue-500 hover:bg-blue-600 text-white
                                px-3 py-1 rounded text-sm'

                onClick={()=>{
                    setIsOpen(!isOpen);
                }}
            >
                Admin Page
            </button> :  token !== "isAdmin" && <form
                onSubmit={handleSubmit(handleAdminLogin)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white
                                px-3 py-1 rounded text-sm"
                // className='bg-cyan-600 text-black text-2xl
                //      w-1/3 h-1/3 flex items-center justify-center flex-col gap-4'
            >

                <Input

                    type="password"
                    name='password'
                    placeholder="Password"
                    register={register}
                    validation={passwordValidation}
                    error={errors.password && errors.password.message}
                    className = "bg-blue-400 w-full p-2  h-full rounded-lg"
                />

            </form>
            }

            {/*{*/}
            {/*    isOpen &&  <div*/}
            {/*        className='absolute top-0 left-0 w-full h-screen flex justify-center items-center'*/}
            {/*    >*/}
            {/*        <form*/}
            {/*            onSubmit={handleSubmit(handleAdminLogin)}*/}
            {/*            className='bg-cyan-600 text-black text-2xl*/}
            {/*         w-1/3 h-1/3 flex items-center justify-center flex-col gap-4' >*/}
            {/*             <span>*/}
            {/*            Enter Your Password*/}
            {/*             </span>*/}
            {/*            <Input*/}
            {/*                type="password"*/}
            {/*                name='password'*/}
            {/*                placeholder="Password"*/}
            {/*                register={register}*/}
            {/*                validation={passwordValidation}*/}
            {/*                error={errors.password && errors.password.message}*/}
            {/*            />*/}
            {/*            <button*/}
            {/*            type={'submit'}*/}
            {/*            >*/}
            {/*                Submit*/}
            {/*            </button>*/}
            {/*        </form>*/}

            {/*    </div>*/}
            {/*}*/}

        </div>
    );
};

export default AdminModal;