import WoodImage from '@/assets/images/wood-image.png';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="container relative flex justify-center items-center h-full min-h-screen">
      <img
        src={WoodImage}
        alt=""
        className="brightness-50 max-h-screen fixed top-0 left-0 select-none z-[-1]"
      />
      <div className="flex flex-col items-center">
        <p className="text-white text-[20rem] leading-tight">404</p>
        <div className="space-y-5 flex flex-col items-center">
          <p className="text-white text-7xl">Woops</p>
          <p className="text-[#FFDBBB] text-2xl">
            Oh, you must be lost, there is no such page.
          </p>
          <Link
            to="/"
            className="bg-[#728BAD] text-white text-3xl rounded-full px-10 py-2 font-semibold hover:bg-[#576b86]"
          >
            Go to the home page
          </Link>
        </div>
      </div>
    </div>
  );
}
