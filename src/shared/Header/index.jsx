import React from 'react';

import Logo from 'assets/images/logo.png';

const Header = () => {
    const links = ['Gallery', 'Prices for services', 'About us', 'Contact'];

    return (
        <div className="py-8 fixed top-0 left-0 w-full">
            <div className="container flex justify-between items-center">
                <div>
                    <img src={Logo} alt="" className="w-48" />
                </div>
                <div className="flex gap-14 text-neutral-100 font-bold text-xl">
                    {links.map((link) => (
                        <span key={link}>{link}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
