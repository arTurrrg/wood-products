import Logo from '@/assets/images/logo.png';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';

export default function Header() {
  const [isBlur, setIsBlur] = useState(false);
  const [isHeaderInPath, setIsHeaderInPath] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsHeaderInPath(
      ['/gallery', '/prices-for-services', '/about-us', '/contact'].includes(
        location.pathname,
      ),
    );
  }, [location.pathname]);

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
      className={`${isHeaderInPath && 'bg-darkRed shadow-sm drop-shadow-glow'} ${isBlur && 'bg-darkRed/40'} py-8 fixed top-0 left-0 w-full z-10 rounded-b-[60px]`}
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
