import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import useForums from "../../../Utils/useForums.jsx";

const Forum = () => {
    const [forums, setForums] = useState([]);
    const [message, setMessage] = useState("");
    const { fetchForum, sendMessage } = useForums();

    const token = localStorage.getItem("token");

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
            loadForums();
        } catch (error) {
            console.error("Failed to send message:", error);
        }
    };

    return (
        <div className="bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 w-screen min-h-screen flex justify-center items-center">
            <div className="flex flex-col items-center gap-4 p-6 bg-white/20 backdrop-blur-md w-[90%] md:w-2/3 lg:w-1/2 h-[80vh] rounded-2xl shadow-2xl border border-white/30">
                <h1 className="text-4xl md:text-5xl text-white font-extrabold drop-shadow-lg">Community Forum</h1>

                <div className="w-full overflow-y-auto bg-white rounded-xl p-4 flex-1 shadow-inner">
                    {forums.length === 0 ? (
                        <p className="text-gray-500 text-center">No messages yet.</p>
                    ) : (
                        forums.map((forum) => (
                            <div key={forum.id} className="mb-3 p-3 rounded-lg bg-gray-100">
                                <p className="text-gray-800">{forum.text}</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    <strong>{forum.userName}</strong> • {forum.date}
                                </p>
                            </div>
                        ))
                    )}
                </div>

                <div className="w-full flex gap-3 mt-2">
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1 p-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        placeholder="Type your message..."
                    />
                    <button
                        onClick={addMessage}
                        disabled={!message.trim()}
                        className={`p-3 rounded-xl transition-all duration-200 text-white flex items-center justify-center ${
                            message.trim()
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                        <IoSend size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Forum;
