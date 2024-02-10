import { useState, useEffect } from 'react';
import Logo from '@/assets/images/logo.png';
import NavbarLinks from './NavbarLinks';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    const Scroll = () => {
      const isBlur = window.scrollY > 50;
      setIsBlur(isBlur);
    };

    window.addEventListener('scroll', Scroll);

    return () => {
      window.removeEventListener('scroll', Scroll);
    };
  }, []);

  return (
    <div
      className={`py-8 fixed top-0 left-0 w-full z-10 ${isBlur && 'backdrop-blur-md'}`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" className="w-48" />
        </Link>
        <NavbarLinks />
      </div>
    </div>
  );
}
