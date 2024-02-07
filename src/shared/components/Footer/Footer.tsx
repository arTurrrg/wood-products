import Logo from '@/assets/images/logo.png';
import { MapPin, PhoneCall } from 'lucide-react';

export default function footer() {
  return (
    <div>
      <div className="bg-blackSoft shadow-inner drop-shadow-glow">
        <div className="container py-7">
          <div className="flex items-center justify-between text-neutral-100 text-2xl">
            <img src={Logo} alt="" />
            <div className="flex items-center">
              <PhoneCall className="size-10 mr-2" />
              <div>
                <p>+420 000 000 000</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="size-10 mr-2" />
              <div>
                <p>Na Plzeňce 1166/0</p>
                <p>150 00</p>
              </div>
            </div>
          </div>
          <p className="text-neutral-100 py-12">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
