import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useTutorials from "../../../Utils/useTutorials.jsx";


const TutorInfo = () => {
    const [tutorial, setTutorial] = useState([]);
    const params = useParams()

    const {fetchTutorials} = useTutorials()
    useEffect(() => {
        const loadTutorials = async () => {
            const data = await fetchTutorials();
            const tutorialInfo = data.find((tutorial) => tutorial.id === params.id);
            setTutorial(tutorialInfo);
        };
        loadTutorials();


    }, []);

    return (
        <div
        className='w-full h-screen dark:bg-gray-500 flex flex-col items-center justify-center p-6 dark:bg-text-white'
        >
            <h1 className='text-4xl'>{tutorial.title}</h1>

            <p className="text-2xl">{tutorial.description}</p>
            <p className="text-2xl ">{tutorial.body}</p>
        </div>
    );
};

export default TutorInfo;