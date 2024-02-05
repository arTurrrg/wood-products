import Person1 from '@/assets/images/person1.png';
import Person2 from '@/assets/images/person2.png';
import Person3 from '@/assets/images/person3.png';

export default function RightProductsCard() {
  return (
    <div className="w-[450px]">
      <img src={Person1} alt="" className="h-40 ml-64" />
      <img
        src={Person2}
        alt=""
        className="h-60 ml-20 -mt-10 border-8 border-[#1E0C06] z-10 relative rounded-3xl"
      />
      <img src={Person3} alt="" className="h-36 ml-64 mt-3" />
    </div>
  );
}
