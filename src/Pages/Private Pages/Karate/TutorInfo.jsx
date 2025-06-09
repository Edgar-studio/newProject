import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useTutorials from "../../../Utils/useTutorials.jsx";

const TutorInfo = () => {
    const [tutorial, setTutorial] = useState(null);
    const [commentText, setCommentText] = useState("");
    const [commentQuery, setCommentQuery] = useState("");
    const params = useParams();

    const { fetchTutorials, addComment, getComment } = useTutorials();
    const token = localStorage.getItem('token');
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
                <input

                    onChange={(e) => setCommentText(e.target.value)}
                    type="text"
                />
                <button
                onClick={async ()=> {
                    try {

                        const date = new Date();
                        const dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                        const commentInfo = {
                            commentText,
                            userName: token,
                            date: dateMDY,
                            tutorialId: tutorial.id,
                        }
                      const response = await  addComment(commentInfo);
                        return response;
                    }catch(e){
                        console.error(e);
                    }
                }}
                >Add</button>
            </div>
            <input
            onChange={(e) => setCommentQuery(e.target.value)}
            type="text"

            />

            <button
            onClick={ async ()=> {
                try{

                const date = new Date();
                const dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                const commentInfo = {
                    commentQuery,
                    userName: token,
                    date: dateMDY,
                    tutorialId: tutorial.id,
                }
                    const response = await  getComment(commentInfo);
                    return response;
                }catch(e){
                    console.error(e);
                }
            }}

            >Post</button>

        </div>
    );
};

export default TutorInfo;
