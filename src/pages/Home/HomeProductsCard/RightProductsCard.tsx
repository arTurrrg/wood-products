import FirstPhoto from '@/assets/images/set1.png';
import SecondPhoto from '@/assets/images/set2.png';
import ThirdPhoto from '@/assets/images/set3.png';

export default function RightProductsCard() {
  return (
    <div className="w-[400px] grid grid-cols-2 grid-rows-3 pl-10 gap-x-10 mr-20">
      <img src={FirstPhoto} alt="" className="h-40 col-start-2" />
      <img
        src={SecondPhoto}
        alt=""
        className="h-40 row-start-2 row-span-2 place-self-center"
      />
      <img src={ThirdPhoto} alt="" className="h-40 row-start-3 col-start-2" />
    </div>
  );
}
