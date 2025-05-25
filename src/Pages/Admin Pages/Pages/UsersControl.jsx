import React, { useEffect, useState } from 'react';
import useAuth from "../../../Utils/useAuth.jsx";
import AddUserModal from "../Components/AddUserModal.jsx";
import { IoIosCloseCircle } from "react-icons/io";

const UsersControl = () => {
    const { fetchUsers, deleteUser, editUser, blockUser } = useAuth();
    const [users, setUsers] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);
    const [editedUser, setEditedUser] = useState({ username: "", email: "", password: "" });
    const [modalIsActive, setModalIsActive] = useState(false);

    const getUsers = async () => {
        const users = await fetchUsers();
        setUsers(users);
    };

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        if (modalIsActive) {
            const timeout = setTimeout(() => {
                scrollToTop();
            }, 3000);

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

    return !modalIsActive ? (
        <div className="p-6 w-full min-h-full mx-auto flex justify-between flex-col gap-4 bg-gradient-to-bl from-blue-600 via-white to-black dark:from-blue-900 dark:via-gray-900 dark:to-black">
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Users Control</h2>
            <div className="space-y-4">
                {users.map(user => (
                    <div
                        key={user.id}
                        className="p-4 bg-white dark:bg-gray-800 shadow rounded flex justify-between items-center text-black dark:text-white"
                    >
                        {editingUserId === user.id ? (
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    name="username"
                                    value={editedUser.username}
                                    onChange={handleInputChange}
                                    className="border px-2 py-1 rounded bg-white dark:bg-gray-700 dark:text-white"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={editedUser.email}
                                    onChange={handleInputChange}
                                    className="border px-2 py-1 rounded bg-white dark:bg-gray-700 dark:text-white"
                                />
                                <input
                                    type="text"
                                    name="password"
                                    value={editedUser.password}
                                    onChange={handleInputChange}
                                    className="border px-2 py-1 rounded bg-white dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                        ) : (
                            <div>
                                <p className="font-medium">👤 {user.username}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">📧 {user.email}</p>
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
                onClick={() => {
                    setModalIsActive(true);
                }}
                className="mt-4 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded"
            >
                Add User
            </button>
        </div>
    ) : (
        <div className="w-full h-screen fixed z-10 top-0 left-0 flex justify-center items-center bg-black bg-opacity-70">
            <div className="relative w-[70%] h-[60vh] bg-white dark:bg-gray-800 rounded shadow-lg p-4">
                <button
                    className="absolute top-3 right-2 p-1 border-none text-gray-600 dark:text-gray-300"
                    onClick={() => setModalIsActive(false)}
                >
                    <IoIosCloseCircle size={25} />
                </button>
                <AddUserModal />
            </div>
        </div>
    );
};

export default UsersControl;
