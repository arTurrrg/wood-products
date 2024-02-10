import { Check, X } from 'lucide-react';
import Ash from '@/assets/images/ash.png';

export default function AshWoodsType() {
  return (
    <div>
      <img src={Ash} alt="" className="h-36" />
      <div className="space-y-2 text-white text-lg">
        <p className="text-lg font-bold pl-14 pt-5 pb-5">Ash</p>
        <div className="flex items-center space-x-1">
          <Check className="text-peachOrange" />
          <p>Durability</p>
        </div>
        <div className="flex items-center space-x-1">
          <X className="text-peachOrange" />
          <p>Hard to handle</p>
        </div>
      </div>
    </div>
  );
}
