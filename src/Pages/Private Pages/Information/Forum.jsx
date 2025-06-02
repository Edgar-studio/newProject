import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import useForums from "../../../Utils/useForums.jsx";

const Forum = () => {
    const [forums, setForums] = useState([]);
    const [message, setMessage] = useState("");
    const { fetchForum, sendMessage } = useForums();

    const token = localStorage.getItem("token");

    // Fetch forum messages
    const loadForums = async () => {
        try {
            const data = await fetchForum();
            setForums(data);
        } catch (error) {
            console.error("Failed to fetch forums:", error);
        }
    };

    useEffect(() => {
        loadForums();
    }, []);

    // Send new message
    const addMessage = async () => {
        if (!message.trim()) return;

        const date = new Date();
        const dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

        const newMessage = {
            text: message,
            userName: token,
            date: dateMDY,
        };

        try {
            await sendMessage(newMessage);
            setMessage("");
            loadForums(); // Refresh forum after sending
        } catch (error) {
            console.error("Failed to send message:", error);
        }
    };

    return (
        <div className="bg-green-500 w-screen min-h-screen flex justify-center items-center">
            <div className="flex flex-col items-center gap-3 p-4 bg-blue-600 w-1/2 h-[75vh] rounded-xl shadow-lg">
                <h1 className="text-5xl text-white font-bold">Forum</h1>

                <div className="w-full overflow-y-auto bg-white p-2 rounded-md flex-1">
                    {forums.length === 0 ? (
                        <p className="text-gray-500">No messages yet.</p>
                    ) : (
                        forums.map((forum) => (
                            <div key={forum.id} className="mb-2 p-2 border-b border-gray-200">
                                <p className="text-black">{forum.text}</p>
                                <p className="text-xs text-gray-600">
                                    <strong>{forum.userName}</strong> - {forum.date}
                                </p>
                            </div>
                        ))
                    )}
                </div>

                <div className="w-full flex gap-2">
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1 p-2 rounded-md"
                        type="text"
                        placeholder="Type your message..."
                    />
                    <IoSend
                        onClick={addMessage}
                        className={`cursor-pointer hover:text-white transition ${
                            !message.trim() ? "opacity-50 pointer-events-none" : ""
                        }`}
                        size={30}
                    />
                </div>
            </div>
        </div>
    );
};

export default Forum;
