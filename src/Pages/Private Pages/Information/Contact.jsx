import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full mx-auto px-4 py-10 text-black dark:text-white dark:bg-gray-800">
            <h1 className="text-3xl font-bold mb-4 dark:text-black">{t("contact_title")}</h1>
            <p className="mb-6 text-gray-700 dark:text-gray-600">
                {t("contact_subtitle")}
            </p>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder={t("contact_name_placeholder")}
                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <input
                    type="email"
                    placeholder={t("contact_email_placeholder")}
                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <textarea
                    placeholder={t("contact_message_placeholder")}
                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded h-32 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                ></textarea>
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                    {t("contact_button")}
                </button>
            </form>
            <div className="mt-8 text-gray-600 dark:text-gray-400">
                <p className="dark:text-gray-600">{t("contact_email")}: hello@example.com</p>
                <p className="dark:text-gray-600">{t("contact_phone")}: +1 (123) 456-7890</p>
            </div>
        </div>
    );
};

export default Contact;
