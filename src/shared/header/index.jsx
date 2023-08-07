import React from 'react';

import Logo from 'assets/images/logo.png';

const Header = () => {
    const links = ['Gallery', 'Prices for services', 'About us', 'Contact'];

    return (
        <div className="flex py-8 justify-between container items-center">
            <div>
                <img src={Logo} alt="" className="w-48" />
            </div>
            <div className="flex gap-14 mr-14 text-[#F5F5F5] font-medium">
                {links.map((link) => (
                    <span key={link}>{link}</span>
                ))}
            </div>
        </div>
    );
};

export default Header;
