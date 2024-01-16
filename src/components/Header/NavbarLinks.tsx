import routes from '@/constants/routes.json';
import { Link } from 'react-router-dom';

export default function NavbarLinks() {
  return (
    <div className="flex gap-14 text-neutral-100 font-bold text-xl">
      {routes.map((route) => (
        <Link key={route.title} to={route.url}>
          {route.title}
        </Link>
      ))}
    </div>
  );
}
