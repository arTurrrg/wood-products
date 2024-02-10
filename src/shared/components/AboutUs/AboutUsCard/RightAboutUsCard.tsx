import Person1 from '@/assets/images/person1.png';
import Person2 from '@/assets/images/person2.png';
import Person3 from '@/assets/images/person3.png';

export default function RightAboutUsCard() {
  return (
    <div className="w-[400px]">
      <div className="flex justify-end">
        <img src={Person1} alt="" className="h-40" />
      </div>
      <div className="flex justify-center -mt-14 ml-11">
        <img
          src={Person2}
          alt=""
          className="h-60 border-8 border-darkRed rounded-3xl"
        />
      </div>
      <div className="flex justify-end mt-2">
        <img src={Person3} alt="" className="h-40" />
      </div>
    </div>
  );
}
