import { Check, X } from 'lucide-react';
import Oak from '@/assets/images/Oak.png';

export default function OakWoodsType() {
  return (
    <div>
      <img src={Oak} alt="" className="h-36" />
      <div className="text-white text-lg">
        <p className="text-lg font-bold pl-14 py-5">Oak</p>
        <div className="space-y-1">
          <div className="flex items-center space-x-1">
            <Check className="text-[#FFC099]" />
            <div>
              <p>Durability</p>
            </div>
          </div>
          <div className="flex items-start space-x-1">
            <Check className="text-[#FFC099]" />
            <div>
              <p>Beatiful texture</p>
            </div>
          </div>
          <div className="flex items-center  space-x-1">
            <Check className="text-[#FFC099]" />
            <div>
              <p>Water resistance</p>
            </div>
          </div>
          <div className="flex items-center  space-x-1">
            <X className="text-[#FFC099]" />
            <div>
              <p>Expensive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
