import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from "react-router-dom";
import useTutorials from "../../../Utils/useTutorials.jsx";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const TutorInfo = () => {
    const [tutorial, setTutorial] = useState(null);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);
    const [likeBurst, setLikeBurst] = useState(false);
    const [dislikeBurst, setDislikeBurst] = useState(false);
    const { id } = useParams();
    const { fetchTutorials, addComment, getComment, deleteComment, editTutorial } = useTutorials();
    const token = localStorage.getItem('token');

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

    const handleDeleteComment = async (commentId) => {
        await deleteComment(commentId);
        await loadTutorialAndComments();
    };

    const handleLikeTutorial = async () => {
        setLikeBurst(true);
        setTimeout(() => setLikeBurst(false), 500);
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
        setDislikeBurst(true);
        setTimeout(() => setDislikeBurst(false), 500);
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
        <div className="w-full min-h-screen dark:bg-gray-900 bg-white flex flex-col items-center p-6 text-black dark:text-white">
            <h1 className="text-4xl font-bold mb-6 text-center">{tutorial.title}</h1>

            <div className="w-full max-w-4xl aspect-video mb-6">
                <iframe
                    className="w-full h-full rounded-xl shadow-lg"
                    src={tutorial.video}
                    title="Tutorial video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="w-full max-w-4xl space-y-6 px-4">
                <div className="flex flex-wrap gap-6 items-start">
                    <p className="text-xl font-medium flex-1">{tutorial.description}</p>

                    <div className="relative">
                        {dislikeBurst && (
                            <span className="absolute top-1/2 left-1/2 w-6 h-6 bg-red-400 rounded-full opacity-70 animate-burst -translate-x-1/2 -translate-y-1/2 z-0" />
                        )}

                        <button
                            onClick={handleDisLikeTutorial}
                            aria-label="Dislike"
                            className="transition-transform duration-150 active:scale-125 z-10 relative"
                        >
                            {tutorial.dislikes.includes(token) ? (
                                <AiFillDislike size={30} className="text-red-600" />
                            ) : (
                                <AiOutlineDislike size={30} />
                            )}
                        </button>
                    </div>

                        <div className="relative">
                            {likeBurst && (
                                <span className="absolute top-1/2 left-1/2 w-6 h-6 bg-blue-400 rounded-full opacity-70 animate-burst -translate-x-1/2 -translate-y-1/2 z-0" />
                            )}

                            <button
                                onClick={handleLikeTutorial}
                                aria-label="Like"
                                className="transition-transform duration-150 active:scale-125 z-10 relative"
                            >
                                {tutorial.likes.includes(token) ? (
                                    <AiFillLike size={30} className="text-blue-600" />
                                ) : (
                                    <AiOutlineLike size={30} />
                                )}
                            </button>
                        </div>
                </div>

                <p className="text-lg leading-relaxed whitespace-pre-line">{tutorial.body}</p>

                <div className="flex flex-col gap-2">
                    <input
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        type="text"
                        className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
                        placeholder="Write a comment..."
                    />
                    <button
                        onClick={handleAddComment}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
                    >
                        Add Comment
                    </button>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">Comments</h2>
                    {comments.length === 0 ? (
                        <p className="text-gray-500">No comments yet.</p>
                    ) : (
                        comments.map(comment => (
                            <div
                                key={comment.id}
                                className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 mb-3 rounded shadow"
                            >
                                <p className="font-semibold">{comment.userName} <span className="text-sm text-gray-500">on {comment.date}</span></p>
                                <p>{comment.commentText}</p>
                                {(token === comment.userName || token === "Admin") && (
                                    <button
                                        onClick={() => handleDeleteComment(comment.id)}
                                        className="text-red-600 hover:underline text-sm mt-1"
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
