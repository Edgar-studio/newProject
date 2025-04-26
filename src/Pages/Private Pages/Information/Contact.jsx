import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-6 text-gray-700">We'd love to hear from you. Fill out the form below or reach out directly via email or phone.</p>
            <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded" />
                <input type="email" placeholder="Your Email" className="w-full border px-4 py-2 rounded" />
                <textarea placeholder="Your Message" className="w-full border px-4 py-2 rounded h-32"></textarea>
                <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Send Message
                </button>
            </form>
            <div className="mt-8 text-gray-600">
                <p>Email: hello@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>
            </div>
        </div>
    );
};

export default Contact;
