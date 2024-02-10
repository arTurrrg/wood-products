import ModernKitchen1 from '@/assets/images/modern-kitchen.png';
import ModernKitchen2 from '@/assets/images/modern-kitchen.png';
import ModernKitchen3 from '@/assets/images/modern-kitchen.png';
import { ImageSlider } from './ImageSlider';

const images = [ModernKitchen1, ModernKitchen2, ModernKitchen3];

export default function OurWork() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl text-neutral-100 font-kyiv pr-72 pt-48">
        <p>OUR WORK</p>
      </div>
      <div>
        <ImageSlider imageUrls={images} />
      </div>
    </div>
  );
}
