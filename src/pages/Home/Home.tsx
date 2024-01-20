import WoodImage from '@/assets/images/wood-image.png';
import FirstPhoto from '@/assets/images/set1.png';
import SecondPhoto from '@/assets/images/set2.png';
import ThirdPhoto from '@/assets/images/set3.png';
import ButtonLink from '@/shared/components/ButtonLink';

export default function Home() {
  return (
    <div className="relative flex justify-end items-center h-full min-h-screen">
      <img
        src={WoodImage}
        alt=""
        className="brightness-50 max-h-screen absolute top-0 left-0 select-none z-[-1]"
      />
      <div className="rounded-3xl rounded-r-none bg-[#1E0C06] shadow-md drop-shadow-glow p-10 pr-[33%]">
        <div className="border-r-[1px] border-[#F5F5F5] pr-10 pb-10">
          <div>
            <img
              src={FirstPhoto}
              alt=""
              className="h-[10rem] absolute right-[17%]"
            />
            <img
              src={SecondPhoto}
              alt=""
              className="h-[10rem] absolute right-[36%] bottom-[30%] "
            />
            <img
              src={ThirdPhoto}
              alt=""
              className="h-[10rem] absolute right-[17%] bottom-[7%] "
            />
          </div>
          <div className="text-7xl font-[KyivTypeSans] text-[#F5F5F5] leading-tight">
            <p>SOLID</p>
            <p>WOOD</p>
            <p>PRODUCTS</p>
          </div>
          <div className="pl-2 pt-7">
            <p className="text-2xl text-[#FFDBBB]">
              Oak, beech, ash from <br />
              <span className="font-semibold">1700 CZK</span> per m3
            </p>
          </div>
        </div>
        <div className="pb-12 pt-4">
          <ButtonLink message="Order" url="/" />
        </div>
      </div>
    </div>
  );
}
