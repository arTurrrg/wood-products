import Logo from '@/assets/images/logo.png';
import NavbarLinks from './NavbarLinks';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="py-8">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" className="w-48" />
        </Link>
        <NavbarLinks />
      </div>
    </div>
  );
}
