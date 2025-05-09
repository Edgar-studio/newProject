import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';


// setIsLogin(!isLogin)
// <Register isLogin={isLogin} toggleForm={toggleForm} />
// <Login isLogin={isLogin} toggleForm={toggleForm} />

const PublicPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin); // parzapes shrjel
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b
        from-[#0f0c29] via-[#302b63] to-[#24243e] font-jost">
            <div className="relative w-[350px] h-[500px] bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=350&q=80')] bg-no-repeat bg-center bg-cover rounded-lg shadow-[5px_20px_50px_#000] overflow-hidden">
                <Register isLogin={isLogin} toggleForm={toggleForm}/>
                <Login isLogin={isLogin} toggleForm={toggleForm} />
            </div>
        </div>
    );
};

export default PublicPage;
