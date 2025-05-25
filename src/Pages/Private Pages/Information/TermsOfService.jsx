import React from 'react';

const TermsOfService = () => {
    return (
        <div className="min-h-screen w-full mx-auto px-4 py-10 bg-black dark:bg-white text-white">
            <h1 className="text-3xl font-bold mb-4 dark:text-green-600 text-green-500">Terms of Service</h1>
            <p className=" mb-4 dark:text-gray-600 text-red-600">
                By using our services, you agree to the following terms:
            </p>
            <ul className="list-disc list-inside  space-y-2 text-red-600">
                <li>You must be at least 13 years old to use this website.</li>
                <li>Do not misuse our services or content.</li>
                <li>We may update these terms at any time with notice.</li>
                <li>Use at your own risk. We are not liable for any damages.</li>
            </ul>
            <p className=" mt-6 dark:text-red-500 text-red-600">
                If you have any questions, contact us at samvel197801@gmail.com.
            </p>
        </div>
    );
};

export default TermsOfService;
