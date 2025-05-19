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
        <div>
            <h1 className='text-2xl '>{tutorial.title}</h1>

            <p>{tutorial.description}</p>
            <p>{tutorial.body}</p>
        </div>
    );
};

export default TutorInfo;