import React, { useEffect, useCallback, useState } from 'react';

const ScrollBackgroundChange = () => {
    const [bgColor, setBgColor] = useState('rgb(234, 145, 144)');

    const handleScroll = useCallback(() => {


        const red = Math.random() * 255;
        const green =  Math.random() * 255;
        const blue =  Math.random() * 255;

        setBgColor(`rgb(${red}, ${green}, ${blue})`);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const paragraphStyle = {
        fontSize: '18px',
        lineHeight: '1.8',
        fontFamily: 'Arial, sans-serif',
        marginBottom: '20px'
    };

    const containerStyle = {
        backgroundColor: bgColor,
        transition: 'background-color 0.3s ease',
        padding: '40px'
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ fontFamily: 'Verdana', marginBottom: '30px' }}>Tutorial Page</h1>
            {Array.from({ length: 20 }).map((_, i) => (
                <p key={i} style={paragraphStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            ))}
        </div>
    );
};

export default ScrollBackgroundChange;
