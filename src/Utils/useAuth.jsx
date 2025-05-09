import axios from "axios";
import {notify} from "./Notify.jsx";

const fetchUsers = async () => {
    const response = await axios.get("http://localhost:4000/users");
    return response.data;
};

const UseAuth = () => {

    const handleRegister = async ({ username, email, password }, e) => {
       e.preventDefault();
        const users =  await fetchUsers();
        console.log(users)
        try {
        let newUser = {
            username,
            email,
            password,
        }
                const response = await axios.post("http://localhost:4000/users", newUser);
                return response.data;
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    const handleLogin = async (userInfo) => {
      const AllUsers = await fetchUsers()
        let User = AllUsers.find(user => user.email === userInfo.email && user.password === userInfo.password);
        if (User) {
            localStorage.setItem("token", User.username);
            window.location.reload();
        }else {
            console.log("error")
            notify("Login failed", "red");
        }
    };

    return { handleLogin, handleRegister };
};

export default UseAuth;