import WoodImage from '@/assets/images/wood-image.png';
import ButtonLink from '@/shared/components/ButtonLink';

export default function Home() {
  return (
    <div className="container relative flex justify-end items-center h-full min-h-screen">
      <img
        src={WoodImage}
        alt=""
        className="brightness-50 max-h-screen absolute top-0 left-0 select-none z-[-1]"
      />
      <div className="rounded-3xl rounded-r-none bg-[#1E0C06] p-10 ">
        <div className="text-6xl text-[#F5F5F5] leading-tight">
          <p>SOLID</p>
          <p>WOOD</p>
          <p>PRODUCTS</p>
        </div>
        <div className="relative left-2 top-5">
          <p className="text-2xl text-[#FFDBBB]">
            Oak, beech, ash from <br />
            <span className="font-semibold">1700 CZK</span> per m3
          </p>
        </div>
        <div className="py-10 relative top-9">
          <ButtonLink message="Order" />
        </div>
        <div className="flex h-[300px] p-2">
          <div className="bg-[#F5F5F5] w-[1px]"></div>
        </div>
      </div>
    </div>
  );
}
