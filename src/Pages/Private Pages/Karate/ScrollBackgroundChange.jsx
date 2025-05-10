import React, { useEffect, useCallback, useState } from 'react';

const ScrollBackgroundChange = () => {
    const [bgColor, setBgColor] = useState('rgb(255, 255, 255)');

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / docHeight;

        const red = Math.min(255, Math.floor(255 * scrollFraction));
        const green = Math.min(255, Math.floor(200 * (1 - scrollFraction)));
        const blue = 255;

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
