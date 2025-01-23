import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-50">
                <div className="mt-4 text-center text-md text-gray-500 p-3 ">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Next-Blogger</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;