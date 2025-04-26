import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-700 mb-4">
                We respect your privacy and are committed to protecting your personal information.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We do not sell or share your data.</li>
                <li>Your information is stored securely.</li>
                <li>You can request deletion of your data at any time.</li>
                <li>We only collect what is necessary to provide our services.</li>
            </ul>
            <p className="text-gray-700 mt-6">
                For any privacy-related concerns, contact us at privacy@example.com.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
