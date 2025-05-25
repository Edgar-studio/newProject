import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-black dark:text-white ">
            <h1 className="text-3xl font-bold mb-4 dark:text-black">Contact Us</h1>
            <p className="mb-6 text-gray-700 dark:text-gray-600">
                We'd love to hear from you. Fill out the form below or reach out directly via email or phone.
            </p>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded h-32 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                ></textarea>
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                    Send Message
                </button>
            </form>
            <div className="mt-8 text-gray-600 dark:text-gray-400">
                <p className="dark:text-gray-600">Email: hello@example.com</p>
                <p className="dark:text-gray-600">Phone: +1 (123) 456-7890</p>
            </div>
        </div>
    );
};

export default Contact;
