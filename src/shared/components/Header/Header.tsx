import Logo from '@/assets/images/logo.png';
import NavbarLinks from './NavbarLinks';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    // TODO: add blur effect on scroll (help: backdrop-blur-md)
    <div className="py-8 fixed top-0 left-0 w-full z-10">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" className="w-48" />
        </Link>
        <NavbarLinks />
      </div>
    </div>
  );
}
