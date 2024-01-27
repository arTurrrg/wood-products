import { Check, X } from 'lucide-react';
import Ash from '@/assets/images/ash.png';

export default function BukWoodsType() {
  return (
    <div>
      <img src={Ash} alt="" className="h-36" />
      <div className="space-y-2 text-white text-lg">
        <p className="text-lg font-bold pl-14 pt-5 pb-5">Ash</p>
        <p>
          <Check className="inline text-[#FFC099]" strokeWidth={3} /> Durability
        </p>
        <p>
          <X className="inline text-[#FFC099]" strokeWidth={3} /> Hard to handle
        </p>
      </div>
    </div>
  );
}
