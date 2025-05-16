import axios from "axios";
import { notify } from "./Notify.jsx";

const UseAuth = () => {
    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:4000/users");
        return response.data;
    };

    const handleRegister = async ({ username, email, password }, e) => {
        e.preventDefault();
        const users = await fetchUsers();
        const user = users.find(u => u.email === email || u.username === username);
        if (user) {
            notify('User already registered', 'red');
        }else {
        try {
            let newUser = { username, email, password };
            const response = await axios.post("http://localhost:4000/users", newUser);
            notify("Register ok", 'green')
            return response.data;
        } catch (error) {
            notify("Register error", 'red')
            console.error('Registration failed:', error);
        }
        }
    };

    const handleLogin = async (userInfo) => {
        const allUsers = await fetchUsers();
        let user = allUsers.find(user => user.email === userInfo.email && user.password === userInfo.password);
        if (user) {
            localStorage.setItem("token", user.username);
            window.location.reload();
        } else {
            notify("Login failed", "red");
        }
    };

    const handleAdminLogin = async (userInfo) => {
        const allUsers = await fetchUsers();
        let user = allUsers.find(user => user.password === userInfo.password);
        if (user) {
            localStorage.setItem("token", 'isAdmin');
            window.location.reload();
        } else {
            notify("Login failed", "red");
        }
    };

    // ✅ Delete User
    const deleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:4000/users/${userId}`);
            notify("User deleted", "green");
        } catch (error) {
            console.error("Failed to delete user:", error);
            notify("Delete failed", "red");
        }
    };

    const editUser = async (userId, updatedData) => {
        try {
            const response = await axios.put(`http://localhost:4000/users/${userId}`, updatedData);
            notify("User updated", "green");
            return response.data;
        } catch (error) {
            console.error("Failed to update user:", error);
            notify("Update failed", "red");
        }
    };
    const blockUser = async (userId, isBlocked, userInfo) => {
        const userData = {
            id: userId,
            username: userInfo.username,
            email: userInfo.email,
            password: userInfo.password,
            isBlocked: isBlocked,

        }
        try {
            const response = await axios.put(`http://localhost:4000/users/${userId}`, userData);
            notify(isBlocked ? "User blocked" : "User unblocked", "green");
            return response.data;
        } catch (error) {
            console.error("Failed to update user:", error);
            notify("Block/unblock failed", "red");
        }
    };

    return {
        handleLogin,
        handleRegister,
        handleAdminLogin,
        fetchUsers,
        deleteUser,
        editUser,
        blockUser
    };
};

export default UseAuth;
