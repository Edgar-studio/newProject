import React, { useState } from 'react';
import axios from "axios";
import {notify} from "../../../Utils/Notify.jsx";

const AddTutorModal = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [body, setBody] = useState("");

    async function addTutor() {
        const info = { title, description, body };
        try {
            const response = await axios.post('http://localhost:4000/KarateTutorial', info);
            notify('Ok', 'green')
            return response.data;
        } catch (err) {
            notify('Error', 'red');
            console.error(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTutor();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl space-y-6"
            >
                <h2 className="text-3xl font-extrabold text-center text-gray-800">Add New Tutorial</h2>

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />

                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />

                <textarea
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    rows="6"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
                />

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold py-3 rounded-md shadow-md hover:brightness-110 transition"
                >
                    Add Tutorial
                </button>
            </form>
        </div>
    );
};

export default AddTutorModal;
