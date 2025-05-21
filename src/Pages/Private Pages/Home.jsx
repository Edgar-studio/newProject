import React from 'react';

const Home = () => {
    return (
        <div className="min-h-[75vh] bg-orange-600 flex flex-col items-center justify-center p-6 dark:bg-gray-600">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8 dark:bg-gray-600 dark:text-white">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">Home</h1>

                <div className="space-y-6">
                    <p className="text-gray-600">
                        Welcome to our platform. We're excited to have you here!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-4 rounded-md border border-blue-100 dark:bg-gray-800">
                            <h2 className="text-xl font-semibold text-blue-700 mb-2">Getting Started</h2>
                            <p className="text-gray-600">
                                Explore our features and discover what you can do with our platform.
                            </p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-md border border-green-100">
                            <h2 className="text-xl font-semibold text-green-700 mb-2">Resources</h2>
                            <p className="text-gray-600">
                                Check out our documentation and guides to help you make the most of your experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;