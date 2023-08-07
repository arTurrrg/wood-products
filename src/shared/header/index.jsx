import React from 'react';

import Logo from 'assets/images/logo.png';

const Header = () => {
    const links = ['Gallery', 'Price for services', 'About us', 'Contact'];

    return (
        <div className="flex justify-between container items-center">
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className="flex gap-10">
                {links.map((link) => (
                    <span>{link}</span>
                ))}
            </div>
        </div>
    );
};

export default Header;
