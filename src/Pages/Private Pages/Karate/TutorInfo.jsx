import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useTutorials from "../../../Utils/useTutorials.jsx";

const TutorInfo = () => {
    const [tutorial, setTutorial] = useState(null);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);
    const params = useParams();

    const { fetchTutorials, addComment, getComment } = useTutorials();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const loadData = async () => {
            const tutorials = await fetchTutorials();
            const tutorialInfo = tutorials.find((tut) => tut.id === params.id);
            setTutorial(tutorialInfo);

            const allComments = await getComment();
            const tutorialComments = allComments.filter(c => c.tutorialId === params.id);
            setComments(tutorialComments);
        };

        loadData();
    }, [params.id]);

    const handleAddComment = async () => {
        try {
            const date = new Date();
            const dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            const commentInfo = {
                commentText,
                userName: token,
                date: dateMDY,
                tutorialId: tutorial.id,
            };

            await addComment(commentInfo);

            const allComments = await getComment();
            const tutorialComments = allComments.filter(c => c.tutorialId === params.id);
            setComments(tutorialComments);

            setCommentText("");
        } catch (e) {
            console.error(e);
        }
    };

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
                <p className="text-xl text-black font-semibold">{tutorial.description}</p>
                <p className="text-lg text-black leading-relaxed whitespace-pre-line">{tutorial.body}</p>

                <div className="flex flex-col space-y-2">
                    <input
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        type="text"
                        className="p-2 rounded text-black"
                        placeholder="Write a comment..."
                    />
                    <button
                        onClick={handleAddComment}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                    >
                        Add Comment
                    </button>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">Comments</h2>
                    {comments.length === 0 ? (
                        <p className="text-gray-400">No comments yet.</p>
                    ) : (
                        comments.map((comment, index) => (
                            <div key={index} className="bg-white text-black p-4 mb-3 rounded shadow">
                                <p className="font-semibold">{comment.userName} on {comment.date}</p>
                                <p>{comment.commentText}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default TutorInfo;
