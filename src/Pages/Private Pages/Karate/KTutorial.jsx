import React, { useEffect, useState } from 'react';
import axios from "axios";

const KTutorial = () => {
    const [karate, setKarate] = useState([]);




    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/KarateTutorial');
            setKarate(response.data);
        } catch (error) {

            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();

    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-purple-700">Karate Tutorials</h1>
                <ul className="space-y-6 w-full max-w-3xl">
                    {karate.length === 0 ? (
                        <p className="text-gray-500 text-center">No tutorials found.</p>
                    ) : (
                        karate.map((item, index) => (
                            <li
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl"
                            >
                                <h2 className="text-2xl font-semibold text-purple-800">{item.title}</h2>
                                <p className="text-gray-700 mt-2">{item.description}</p>
                                <p className="text-gray-600 mt-4 text-sm">{item.body}</p>
                            </li>
                        ))
                    )}
                </ul>

        </div>
    );
};

export default KTutorial;
