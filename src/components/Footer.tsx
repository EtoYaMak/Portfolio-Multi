import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black p-4 text-center border-t-2 border-yellow-500">
            <p className="font-jersey">&copy; {new Date().getFullYear()} My Retro Portfolio</p>
        </footer>
    );
};

export default Footer; 