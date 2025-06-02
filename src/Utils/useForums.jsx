import React from 'react';
import axios from "axios";

const UseForums = () => {
    const fetchForum = async ()=>{
        try{
            const response = await axios.get(`http://localhost:4000/Forums`)
            return response.data;
        } catch (e) {
            console.log(e.message);
        }
    }
    const sendMessage = async (newMessage) => {
        try{
            if (newMessage){
                console.log(newMessage);
                const response = await axios.post(`http://localhost:4000/Forums`, newMessage)
                return response.data;
            }else {
                console.log("error");
            }
        }catch(e){
            console.log(e.message);
        }
    }
    return {
        fetchForum,
        sendMessage,
    };
};

export default UseForums;