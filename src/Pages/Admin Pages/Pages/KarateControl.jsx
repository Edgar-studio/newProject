import React, { useEffect, useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import AddTutorModal from "../Components/AddTutorModal.jsx";
import useTutorials from "../../../Utils/useTutorials.jsx";

const KarateControl = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [tutorials, setTutorials] = useState([]);
    const [tutorialToEdit, setTutorialToEdit] = useState(null);
    const { fetchTutorials, addTutorial, editTutorial, deleteTutorial } = useTutorials();

    // Fetch tutorials
    useEffect(() => {
        const loadTutorials = async () => {
            const data = await fetchTutorials();
            setTutorials(data);
        };
        loadTutorials();
    }, []);

    const handleSave = async (tutorialData, id) => {
        if (id) {
            const updatedTutorial = await editTutorial(id, tutorialData);
            setTutorials(tutorials.map((t) => (t.id === id ? updatedTutorial : t)));
        } else {
            const newTutorial = await addTutorial(tutorialData);
            setTutorials([...tutorials, newTutorial]);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteTutorial(id);
            setTutorials(tutorials.filter((t) => t.id !== id));
        } catch (error) {
            // Error handling could be added here
        }
    };

    const handleEdit = (tutorial) => {
        setTutorialToEdit(tutorial);
        setModalIsOpen(true);
    };

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        if (modalIsOpen) {
            const timeout = setTimeout(() => {
                scrollToTop();
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [modalIsOpen]);

    return (
        !modalIsOpen ? (
            <div className="p-6 max-w-4xl mx-auto flex flex-col min-h-full gap-4">
                <h2 className="text-2xl font-bold mb-6">Karate Control</h2>

                <div className="space-y-4">
                    {tutorials.map((tutorial) => (
                        <div
                            key={tutorial.id}
                            className="p-4 bg-white shadow rounded flex justify-between items-center"
                        >
                            <div>
                                <p className="font-medium">🥋 {tutorial.title}</p>
                                <p className="text-sm text-gray-600">{tutorial.description}</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(tutorial)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(tutorial.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => {
                        setTutorialToEdit(null);
                        setModalIsOpen(true);
                    }}
                    className="mt-6 bg-green-500 text-white px-4 py-2 rounded"
                >
                    Add Tutorial
                </button>
            </div>
        ) : (
            <div className="w-full h-screen fixed z-10 top-0 left-0 flex justify-center items-center bg-white">
                <div className="relative w-[70%] h-[60vh] bg-white shadow rounded p-4">
                    <button
                        className="absolute top-3 right-3 p-1 border-none"
                        onClick={() => {
                            setModalIsOpen(false);
                            setTutorialToEdit(null);
                        }}
                    >
                        <IoIosCloseCircle size={30} />
                    </button>
                    <AddTutorModal
                        initialData={tutorialToEdit}
                        onSave={handleSave}
                        onClose={() => {
                            setModalIsOpen(false);
                            setTutorialToEdit(null);
                        }}
                    />
                </div>
            </div>
        )
    );
};

export default KarateControl;