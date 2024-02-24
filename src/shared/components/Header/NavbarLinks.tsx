import routes from '@/constants/routes.json';
import { NavLink } from 'react-router-dom';

export default function NavbarLinks() {
  return (
    <div className="flex gap-14 text-neutral-100 font-bold text-xl">
      {routes.slice(1).map((route) => (
        <NavLink
          key={route.title}
          to={route.url}
          className={({ isActive }) => `${isActive && 'text-wildBlue'}`}
        >
          {route.title}
        </NavLink>
      ))}
    </div>
  );
}
