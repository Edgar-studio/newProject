import React, { useEffect, useState } from 'react';
import axios from "axios";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get('http://localhost:4000/Comments');
                const data = await response.data;
                setComments(data);

            } catch (err) {
                console.error('Fetch error:', err);
                setError('Failed to load comments. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, []);

    if (loading) {
        return <div className="p-6 max-w-2xl mx-auto">Loading...</div>;
    }

    if (error) {
        return <div className="p-6 max-w-2xl mx-auto text-red-500">{error}</div>;
    }

    if (comments.length === 0) {
        return <div className="p-6 max-w-2xl mx-auto">No comments available.</div>;
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Member discussion</h2>
            {comments.map((comment) => (
                <div key={comment.id} className="mb-8">
                    <div className="font-semibold">{comment.username || 'Anonymous'}</div>
                    <div className="text-sm text-gray-500">
                        {comment.title || 'No title'} · {comment.time || 'No time'}
                    </div>
                    <p className="mt-2">{comment.text || 'No content'}</p>

                    <div className="flex gap-4 mt-2 text-sm text-gray-600">
                        <button className="hover:text-red-500 transition">❤️ Like</button>
                        <button className="hover:text-blue-500 transition">🔗 Share</button>
                        <button className="hover:text-green-500 transition">💬 Comment</button>
                    </div>

                    {Array.isArray(comment.replies) && comment.replies.length > 0 && (
                        comment.replies.map((reply) => (
                            <div key={reply.id} className="ml-6 mt-5 border-l pl-4 border-gray-300">
                                <div className="font-semibold">{reply.username || 'Anonymous'}</div>
                                <div className="text-sm text-gray-500">
                                    {reply.title || 'No title'} · {reply.time || 'No time'}
                                </div>
                                <p className="mt-1">{reply.text || 'No content'}</p>
                                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                                    <button className="hover:text-red-500 transition">❤️ Like</button>
                                    <button className="hover:text-blue-500 transition">🔗 Share</button>
                                    <button className="hover:text-green-500 transition">💬 Comment</button>
                                </div>
                                {reply.likes && <div className="text-sm mt-1">❤️ {reply.likes}</div>}
                            </div>
                        ))
                    )}
                </div>
            ))}
        </div>
    );
};

export default Comments;