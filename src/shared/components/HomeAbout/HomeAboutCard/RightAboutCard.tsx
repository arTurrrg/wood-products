import Person1 from '@/assets/images/person1.png';
import Person2 from '@/assets/images/person2.png';
import Person3 from '@/assets/images/person3.png';

export default function RightProductsCard() {
  return (
    <div className="w-[600px] grid grid-cols-2 grid-rows-3 pl-20 mr-10">
      <img src={Person1} alt="" className="h-40 col-start-3" />
      <img
        src={Person2}
        alt=""
        className="h-50 row-start-2 col-start-3 row-span-2"
      />
      <img src={Person3} alt="" className="h-40 row-start-3 col-start-3" />
    </div>
  );
}
