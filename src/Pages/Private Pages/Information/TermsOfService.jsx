import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfService = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen w-full mx-auto px-4 py-10 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <h1 className="text-4xl font-bold mb-6 text-green-600 dark:text-emerald-400">
                {t("terms_of_service")}
            </h1>

            <p className="mb-6 text-gray-700 dark:text-gray-300">
                {t("tos_intro")}
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-300">
                <li>{t("tos_age_requirement")}</li>
                <li>{t("tos_no_misuse")}</li>
                <li>{t("tos_updates")}</li>
                <li>{t("tos_no_liability")}</li>
            </ul>

            <p className="mt-8 text-blue-700 dark:text-blue-400">
                {t("tos_contact")}
            </p>
        </div>
    );
};

export default TermsOfService;
