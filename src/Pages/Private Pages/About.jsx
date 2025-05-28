import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-full p-6 dark:bg-gray-600">
            <div className="max-w-4xl mx-auto rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold mb-6 dark:text-white">
                    {t("about_title")}
                </h1>

                <div className="space-y-6">
                    <p className="text-gray-600 dark:text-black leading-relaxed">
                        {t("about_intro")}
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 p-4 rounded-md">
                        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-2">
                            {t("mission_title")}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t("mission_text")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">
                                {t("who_title")}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t("who_text")}
                            </p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">
                                {t("what_title")}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t("what_text")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
