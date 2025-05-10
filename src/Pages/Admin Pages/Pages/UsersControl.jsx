import React, {useEffect} from 'react';
import useAuth from "../../../Utils/useAuth.jsx";

const UsersControl =  () => {
    const {fetchUsers} = useAuth()
    async function getUsers () {
        const users = await fetchUsers()
        console.log(users)
    }
   useEffect(() => {
       getUsers()
   },[])
    return (
        <div>
            Users Control
        </div>
    );
};

export default UsersControl;