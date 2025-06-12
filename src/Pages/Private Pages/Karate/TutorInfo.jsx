import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from "react-router-dom";
import useTutorials from "../../../Utils/useTutorials.jsx";
import {AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike} from "react-icons/ai";

const TutorInfo = () => {
    const [tutorial, setTutorial] = useState(null);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const { fetchTutorials, addComment, getComment, deleteComment, editTutorial } = useTutorials();
    const token = localStorage.getItem('token');

    // Բեռնում ենք տվյալները
    const loadTutorialAndComments = useCallback(async () => {
        const tutorials = await fetchTutorials();
        const tutorialInfo = tutorials.find(tut => tut.id === id);
        setTutorial(tutorialInfo);

        const allComments = await getComment();
        const tutorialComments = allComments.filter(c => c.tutorialId === id);
        setComments(tutorialComments);
    }, [id]);

    useEffect(() => {
        loadTutorialAndComments();
    }, [loadTutorialAndComments]);

    // Մեկնաբանություն ավելացնել
    const handleAddComment = async () => {
        if (!commentText.trim()) return;
        const date = new Date().toLocaleDateString('en-GB');
        const commentInfo = {
            commentText,
            userName: token,
            date,
            tutorialId: id,
        };

        await addComment(commentInfo);
        await loadTutorialAndComments();
        setCommentText("");
    };

    // Մեկնաբանություն ջնջել
    const handleDeleteComment = async (commentId) => {
        await deleteComment(commentId);
        await loadTutorialAndComments();
    };

    // Լայք անել
    const handleLikeTutorial = async () => {
        const currentLikes = tutorial.likes || [];
        const currentDisLikes = tutorial.dislikes || [];

        const alreadyLiked = currentLikes.includes(token);
        const alreadyDisLiked = currentDisLikes.includes(token);

        let updatedLikes = [...currentLikes];
        let updatedDisLikes = [...currentDisLikes];

        if (alreadyLiked) {
            updatedLikes = updatedLikes.filter(user => user !== token);
        } else {
            updatedLikes.push(token);
            // եթե դիսլայք արած է, հանում ենք
            if (alreadyDisLiked) {
                updatedDisLikes = updatedDisLikes.filter(user => user !== token);
            }
        }

        const updatedTutorial = {
            ...tutorial,
            likes: updatedLikes,
            dislikes: updatedDisLikes,
        };

        await editTutorial(tutorial.id, updatedTutorial);
        setTutorial(updatedTutorial);
    };


    const handleDisLikeTutorial = async () => {
        const currentLikes = tutorial.likes || [];
        const currentDisLikes = tutorial.dislikes || [];

        const alreadyLiked = currentLikes.includes(token);
        const alreadyDisLiked = currentDisLikes.includes(token);

        let updatedLikes = [...currentLikes];
        let updatedDisLikes = [...currentDisLikes];

        if (alreadyDisLiked) {
            updatedDisLikes = updatedDisLikes.filter(user => user !== token);
        } else {
            updatedDisLikes.push(token);
            // եթե լայք արած է, հանում ենք
            if (alreadyLiked) {
                updatedLikes = updatedLikes.filter(user => user !== token);
            }
        }

        const updatedTutorial = {
            ...tutorial,
            likes: updatedLikes,
            dislikes: updatedDisLikes,
        };

        await editTutorial(tutorial.id, updatedTutorial);
        setTutorial(updatedTutorial);
    };


    if (!tutorial) {
        return <div className="text-center text-white mt-20 text-xl">Loading...</div>;
    }

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

                <div className="flex flex-wrap gap-6">
                    <p className="text-xl text-black font-semibold">{tutorial.description}</p>
                    <div className='bg-gray-500 flex gap-2 rounded-2xl p-2'>
                        <button
                            onClick={handleLikeTutorial}
                            className="border-0 transition-transform duration-150 active:scale-125"
                        >
                            {tutorial.likes.includes(token) ? (
                                <AiFillLike size={30} />
                            ) : (
                                <AiOutlineLike size={30} />
                            )}
                        </button>

                        <button
                            onClick={handleDisLikeTutorial}
                            className="border-0 transition-transform duration-150 active:scale-125"
                        >
                            {tutorial.dislikes.includes(token) ? (
                                <AiFillDislike size={30} />
                            ) : (
                                <AiOutlineDislike size={30} />
                            )}
                        </button>

                    </div>

                </div>
                <p className="text-lg text-black leading-relaxed whitespace-pre-line">{tutorial.body}</p>

                {/* Մեկնաբանություն ավելացնելու դաշտ */}
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

                {/* Մեկնաբանությունների ցուցադրություն */}
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">Comments</h2>
                    {comments.length === 0 ? (
                        <p className="text-gray-400">No comments yet.</p>
                    ) : (
                        comments.map(comment => (
                            <div key={comment.id} className="bg-white text-black p-4 mb-3 rounded shadow">
                                <p className="font-semibold">{comment.userName} on {comment.date}</p>
                                <p>{comment.commentText}</p>
                                {(token === comment.userName || token === "Admin") && (
                                    <button
                                        onClick={() => handleDeleteComment(comment.id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default TutorInfo;
