import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useTutorials from "../../../Utils/useTutorials.jsx";

const TutorInfo = () => {
    const [tutorial, setTutorial] = useState(null);
    const params = useParams();

    const { fetchTutorials } = useTutorials();

    useEffect(() => {
        const loadTutorials = async () => {
            const data = await fetchTutorials();
            const tutorialInfo = data.find((tutorial) => tutorial.id === params.id);
            setTutorial(tutorialInfo);
        };
        loadTutorials();
    }, []);

    if (!tutorial) return <div className="text-center text-white mt-20 text-xl">Loading...</div>;

    return (
        <div className="w-full min-h-screen dark:bg-gray-900 flex flex-col items-center justify-start p-6 text-white">
            <h1 className="text-4xl font-bold mb-6 text-center">{tutorial.title}</h1>

            <div className="w-full max-w-4xl aspect-video mb-6">
                <iframe
                    className="w-full h-full rounded-xl shadow-lg"
                    src={tutorial.video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="w-full max-w-4xl space-y-6 px-4">
                <p className="text-xl text-black font-semibold">
                    {tutorial.description}
                </p>
                <p className="text-lg text-black leading-relaxed whitespace-pre-line">
                    {tutorial.body}
                </p>
            </div>
        </div>
    );
};

export default TutorInfo;
