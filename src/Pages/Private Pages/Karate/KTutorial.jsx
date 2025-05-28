import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const KTutorial = () => {
    const [karate, setKarate] = useState([]);
    const { t } = useTranslation();

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
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
            <h1 className="text-3xl font-bold mb-6 text-purple-700 dark:text-purple-300">
                {t("karate_title")}
            </h1>

            {karate.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center mb-4">
                    {t("no_tutorials")}
                </p>
            ) : (
                <ul className="w-full grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 justify-center">
                    {karate.map((item, index) => (
                        <Link
                            key={index}
                            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6
                            transition hover:shadow-2xl h-full flex flex-col justify-evenly items-center"
                            to={item.id}
                            title={t("view_tutorial", { title: item.title })}
                        >
                            <h2 className="text-2xl font-semibold text-purple-800 dark:text-purple-200 text-center">
                                {item.title}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mt-2 text-center">
                                {item.description}
                            </p>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default KTutorial;
