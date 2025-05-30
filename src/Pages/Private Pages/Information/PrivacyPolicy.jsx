import React from 'react';
import {useTranslation} from "react-i18next";

const PrivacyPolicy = () => {
    const {t} = useTranslation();
    return (
        <div className="min-h-screen w-full mx-auto px-4 py-10 dark:bg-gray-800  ">
            <h1 className="text-3xl text-black  font-bold mb-4  dark:text-white w-full block p-4">{t("privacy_policy")}</h1>
            <p className="text-blue-600 mb-4 dark:text-white">
                We respect your privacy and are committed to protecting your personal information.
            </p>
            <ul className="list-disc list-inside text-black dark:text-white space-y-2">
                <li>We do not sell or share your data.</li>
                <li>Your information is stored securely.</li>
                <li>You can request deletion of your data at any time.</li>
                <li>We only collect what is necessary to provide our services.</li>
            </ul>
            <p className="text-black mt-6 dark:text-white">
                For any privacy-related concerns, contact us at privacy@example.com.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
