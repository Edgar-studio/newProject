import axios from "axios";

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

    const handleLogin = () => {
        localStorage.setItem('token', 'fake-token'); // Fake token
        console.log('Logged in!');
        window.location.reload();
    };

    return { handleLogin, handleRegister };
};

export default UseAuth;