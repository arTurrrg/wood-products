import { Check, X } from 'lucide-react';
import Oak from '@/assets/images/Oak.png';

export default function OakWoodsType() {
  return (
    <div>
      <img src={Oak} alt="" className="h-36" />
      <div className="space-y-2 text-white text-lg">
        <p className="text-lg font-bold pl-14 pt-5 pb-5">Oak</p>
        <p>
          <Check className="inline text-[#FFC099]" strokeWidth={3} /> Durability
        </p>
        <p>
          <Check className="inline text-[#FFC099]" strokeWidth={3} /> Beatiful
          <p className="pl-7">texture</p>
        </p>
        <p>
          <Check className="inline text-[#FFC099]" strokeWidth={3} /> Water
          resistance
        </p>
        <p>
          <X className="inline text-[#FFC099]" strokeWidth={3} /> Expensive
        </p>
      </div>
    </div>
  );
}
