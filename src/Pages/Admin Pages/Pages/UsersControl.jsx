import React, { useEffect, useState } from 'react';
import useAuth from "../../../Utils/useAuth.jsx";

const UsersControl = () => {
    const { fetchUsers, deleteUser, editUser } = useAuth();
    const [users, setUsers] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);
    const [editedUser, setEditedUser] = useState({ username: "", email: "" });

    const getUsers = async () => {
        const users = await fetchUsers();
        setUsers(users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleInputChange = (e) => {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = async (id) => {
        await editUser(id, editedUser);
        setEditingUserId(null);
        getUsers();
    };

    const handleEdit = (user) => {
        setEditingUserId(user.id);
        setEditedUser({ username: user.username, email: user.email });
    };

    const cancelEdit = () => {
        setEditingUserId(null);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        getUsers();
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
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
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersControl;
