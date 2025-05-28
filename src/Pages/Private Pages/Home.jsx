import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-[75vh] bg-orange-600 flex flex-col items-center justify-center p-6 dark:bg-gray-600">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8 dark:bg-gray-600 dark:text-white">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                    {t("home")}
                </h1>

                <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300">
                        {t("welcome_text")}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-4 rounded-md border border-blue-100 dark:bg-gray-800 dark:border-gray-700">
                            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
                                {t("Getting_Started")}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t("getting_started_desc")}
                            </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-md border border-blue-100 dark:bg-gray-800 dark:border-gray-700">
                            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
                                {t("resources")}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t("resources_desc")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
