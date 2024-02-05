import ModernKitchen from '@/assets/images/modern-kitchen.png';
import { MoveLeft, MoveRight, Circle } from 'lucide-react';
export default function HomeOurWork() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl text-neutral-100 font-[KyivTypeSans] pr-72 pt-48">
        <p>OUR WORK</p>
      </div>
      <div className="flex items-center pt-24 space-x-6">
        <MoveLeft className="text-[#A3B8D7] cursor-pointer hover:text-[#7ca8eb] size-12" />
        <img src={ModernKitchen} alt="" className="w-[850px] " />
        <MoveRight className="text-[#A3B8D7] cursor-pointer hover:text-[#7ca8eb] size-12" />
      </div>
      <div className="flex items-center justify-center pt-4 space-x-4">
        <Circle className="text-[#728BAD]" />
        <Circle className="text-[#728BAD] fill-[#D5DCEE]" />
        <Circle className="text-[#728BAD]" />
      </div>
    </div>
  );
}
