import React, { useState, useEffect } from 'react';

const AddTutorModal = ({ initialData, onSave, onClose }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || "");
            setDescription(initialData.description || "");
            setBody(initialData.body || "");
        }
    }, [initialData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tutorialData = { title, description, body };
        try {
            await onSave(tutorialData, initialData?.id);
            setTitle("");
            setDescription("");
            setBody("");
            onClose();
        } catch (error) {
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <h2 className="text-3xl font-extrabold text-center text-gray-800">
                {initialData ? "Edit Tutorial" : "Add New Tutorial"}
            </h2>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
            />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
            />

            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows="6"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
                required
            />

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold py-3 rounded-md shadow-md hover:brightness-110 transition"
            >
                {initialData ? "Update Tutorial" : "Add Tutorial"}
            </button>
        </form>
    );
};

export default AddTutorModal;