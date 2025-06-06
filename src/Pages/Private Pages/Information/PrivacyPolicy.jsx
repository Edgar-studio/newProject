import React from 'react';
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen w-full mx-auto px-4 py-10 dark:bg-gray-800">
            <h1 className="text-3xl text-black font-bold mb-4 dark:text-white w-full block p-4">
                {t("privacy_policy")}
            </h1>
            <p className="text-blue-600 mb-4 dark:text-white">
                {t("Privacy_Respect")}
            </p>
            <ul className="list-disc list-inside text-black dark:text-white space-y-2">
                <li>{t("NoDataSell")}</li>
                <li>{t("StoredInformation")}</li>
                <li>{t("UserDataDeletion",)}</li>
                <li>{t("OnlyNecessaryData")}</li>
            </ul>
            <p className="text-black mt-6 dark:text-white">
                {t("PrivacyContact")}
            </p>
        </div>
    );
};

export default PrivacyPolicy;
