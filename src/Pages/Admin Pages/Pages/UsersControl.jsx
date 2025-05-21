import React, { useEffect, useState } from 'react';
import useAuth from "../../../Utils/useAuth.jsx";
import AddUserModal from "../Components/AddUserModal.jsx";
import {IoIosCloseCircle} from "react-icons/io";

const UsersControl = () => {
    const { fetchUsers, deleteUser, editUser, blockUser} = useAuth();
    const [users, setUsers] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);
    const [editedUser, setEditedUser] = useState({ username: "", email: "", password: "" });
   const [modalIsActive, setModalIsActive] = useState(false);
    const getUsers = async () => {
        const users = await fetchUsers();
        setUsers(users);
    };

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        if (modalIsActive) {
            // Հապաղում ենք մի փոքր՝ DOM թարմանալու համար
            const timeout = setTimeout(() => {
                scrollToTop();
            }, 3000); // 100 միլիվայրկյան

            return () => clearTimeout(timeout);
        }
    }, [modalIsActive]);

    useEffect(() => {
         getUsers();
    }, []);

    const handleInputChange = (e) => {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = async (id) => {
        await editUser(id, editedUser);
        setEditingUserId(null);
      await getUsers();
    };

    const handleEdit = (user) => {
        setEditingUserId(user.id);
        setEditedUser({ username: user.username, email: user.email, password: user.password });

    };

    const cancelEdit = () => {
        setEditingUserId(null);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        await getUsers();
    };

    const handleBlock = async (id, currentBlockedStatus, userInfo) => {
        await blockUser(id, !currentBlockedStatus, userInfo);
        await getUsers();
    };
    return (
        !modalIsActive ? (
        <div className="p-6 w-full min-h-full
        mx-auto flex justify-between flex-col gap-4 bg-gradient bg-gradient-to-bl from-blue-600 via-white-500 to-black-500 ">

            <h2 className="text-2xl font-bold mb-6">Users Control</h2>
            <div className="space-y-4">
                {users.map(user => (
                    <div key={user.id} className="p-4 bg-white shadow rounded flex justify-between items-center">
                        {editingUserId === user.id ? (
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    name="username"
                                    value={editedUser.username}
                                    onChange={handleInputChange}
                                    className="border px-2 py-1 rounded"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={editedUser.email}
                                    onChange={handleInputChange}
                                    className="border px-2 py-1 rounded"
                                />
                                <input
                                    type="text"
                                    name="password"
                                    value={editedUser.password}
                                    onChange={handleInputChange}
                                    className="border px-2 py-1 rounded"
                                />
                            </div>
                        ) : (
                            <div>
                                <p className="font-medium">👤 {user.username}</p>
                                <p className="text-sm text-gray-600">📧 {user.email}</p>
                            </div>
                        )}
                        <div className="flex gap-2">
                            {editingUserId === user.id ? (
                                <>
                                    <button
                                        onClick={() => handleEditSubmit(user.id)}
                                        className="bg-green-500 text-white px-3 py-1 rounded"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={cancelEdit}
                                        className="bg-gray-400 text-white px-3 py-1 rounded"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className={`bg-red-500 text-white px-3 py-1 rounded 
                                        ${user.username === "Admin" ? 'hidden' : ''}`}
                                    >
                                        Delete
                                    </button>
                                    <button

                                        onClick={() => handleBlock(user.id, user.isBlocked, user)}
                                        className={`px-3 py-1 rounded text-white ${
                                            user.isBlocked ? 'bg-green-500' : 'bg-orange-500'
                                        } ${user.username === "Admin" ? 'hidden' : ''}`}
                                    >
                                        {user.isBlocked ? 'Unblock' : 'Block'}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={()=>{
                    setModalIsActive(true)

                }}
            >
                Add User
            </button>
        </div>
    ) : (
             <div
                className='w-full h-screen  fixed z-10 top-0 left-0 flex justify-center items-center'
            >

                 <div
                     className='relative w-[70%] h-[60vh]'
                 >
                     <button
                         className='absolute top-3 right-2 p-1 border-none'
                         onClick={()=>setModalIsActive(false)}
                     >
                         <IoIosCloseCircle
                         size={25}
                         />
                     </button>
                     <AddUserModal/>
                 </div>


            </div>
        )

    );
};

export default UsersControl;
