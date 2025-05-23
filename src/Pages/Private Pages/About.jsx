import React from 'react';

const About = () => {
    return (
        <div className="min-h-fullbg-gray-50 p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">About This Page</h1>

                <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                        Welcome to our About page. This section provides information about our company, mission, and the services we offer.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">Our Mission</h2>
                        <p className="text-gray-600">
                            We're dedicated to creating exceptional user experiences through innovative technology solutions that solve real-world problems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-gray-100 p-4 rounded-md">
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Who We Are</h3>
                            <p className="text-gray-600">
                                A team of passionate developers and designers committed to excellence in every project we undertake.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-md">
                            <h3 className="text-lg font-medium text-gray-800 mb-2">What We Do</h3>
                            <p className="text-gray-600">
                                We build intuitive, responsive, and scalable web applications that help businesses thrive in the digital landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;