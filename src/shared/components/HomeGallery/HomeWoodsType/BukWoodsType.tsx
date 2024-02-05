import { Check, X } from 'lucide-react';
import Buk from '@/assets/images/buk.png';

export default function BukWoodsType() {
  return (
    <div>
      <img src={Buk} alt="" className="h-36" />
      <div className="space-y-2 text-white text-lg">
        <p className="text-lg font-bold pl-14 pt-5 pb-5">Buk</p>
        <div className="flex items-center space-x-1">
          <Check className="inline text-[#FFC099]" />
          <div>
            <p>Durability</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <X className="inline text-[#FFC099]" />
          <div>
            <p>Hard to handle</p>
          </div>
        </div>
      </div>
    </div>
  );
}
