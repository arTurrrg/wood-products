import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  message: string;
  url: string;
}

export default function ButtonLink({ message, url }: ButtonLinkProps) {
  return (
    <Link
      to={url}
      className="bg-shadowBlue text-white text-2xl rounded-full px-14 py-2 font-semibold hover:bg-[#576b86]"
    >
      {message}
    </Link>
  );
}
