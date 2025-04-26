import React from 'react';

const TermsOfService = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-700 mb-4">
                By using our services, you agree to the following terms:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You must be at least 13 years old to use this website.</li>
                <li>Do not misuse our services or content.</li>
                <li>We may update these terms at any time with notice.</li>
                <li>Use at your own risk. We are not liable for any damages.</li>
            </ul>
            <p className="text-gray-700 mt-6">
                If you have any questions, contact us at samvel197801@gmail.com.
            </p>
        </div>
    );
};

export default TermsOfService;
