import WoodImage from '@/assets/images/wood-image.png';
import ButtonLink from '@/shared/components/ButtonLink';

export default function PageNotFound() {
  return (
    <div className="container relative flex justify-center items-center h-full min-h-screen">
      <img
        src={WoodImage}
        alt=""
        className="brightness-50 max-h-screen absolute top-0 left-0 select-none z-[-1]"
      />
      <div>
        <p className="text-white text-[20rem] leading-tight">404</p>
        <div className="space-y-5 flex flex-col items-center">
          <p className="text-white text-7xl">Woops</p>
          <p className="text-[#FFDBBB] text-2xl">
            Oh, you must be lost, there is no such page.
          </p>
          <ButtonLink message="Go to the home page" url="/" />
        </div>
      </div>
    </div>
  );
}
