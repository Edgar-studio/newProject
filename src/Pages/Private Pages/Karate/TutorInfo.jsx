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

        //stylery kargavorel
        <div
            className='w-full h-screen dark:bg-gray-500 flex flex-col items-center
        justify-center p-6 dark:bg-text-white'
        >
            <h1 className='text-4xl'>{tutorial.title}</h1>
            <iframe width="914" height="514" src={tutorial.video}

                    allow="accelerometer; pause; autoplay; clipboard-write; encrypted-media;
                    gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
            <p className="text-2xl">{tutorial.description}</p>
            <p className="text-2xl ">{tutorial.body}</p>
        </div>
    );
};

export default TutorInfo;