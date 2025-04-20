import React from 'react';

const PublicPage = () => {

    function handleClick() {
        localStorage.setItem('token', 'sdgsdgsdg');
        window.location.reload();
    }
    return (
        <div>
            Log_reg
            <button
            onClick={handleClick}
            >
                Login
            </button>
        </div>
    );
};

export default PublicPage;