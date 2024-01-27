import WoodImage from '@/assets/images/wood-image.png';
import HomeProductsCard from './HomeProductsCard/HomeProductsCard';
import HomeGallery from '@/shared/components/HomeGallery/HomeGallery';
import HomeAdvantagesWorkingWithUs from './HomeAdvantagesWorkingWithUs/HomeAdvantagesWorkingWithUs';
import HomeAbout from '@/shared/components/HomeAbout/HomeAbout';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <img
        src={WoodImage}
        alt=""
        className="brightness-50 max-h-screen absolute top-0 left-0 select-none z-[-1]"
      />
      <HomeProductsCard />
      <HomeGallery />
      <HomeAdvantagesWorkingWithUs />
      <HomeAbout />
    </div>
  );
}
