import { Link } from 'react-router-dom';

export default function ButtonLink({ message }: { message: string }) {
  return (
    <Link
      to="/"
      className="bg-[#728BAD] text-white text-2xl rounded-full px-14 py-2 font-semibold hover:bg-[#576b86]"
    >
      {message}
    </Link>
  );
}
