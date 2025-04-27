import React from 'react';

const Input = ({name,  register, validation, error, ...props}) => {
    return (
        <div>
            <input

                {...props}
                {...register(name, validation)}
                className="w-3/5 h-8 bg-gradient-to-r from-[#7d20f7] via-[#3958e3]
                 to-[#3f0096] mx-auto mt-4
                p-3 border-none outline-none rounded-md block text-white"
            />
            {error && <p className="w-full h-8 flex items-center justify-center
                mx-auto  border-none outline-none rounded-md  text-red-500">{error}</p>}
        </div>
    );
};

export default Input;