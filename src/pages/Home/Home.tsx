import WoodImage from '@/assets/images/wood-image.png';
import HomeProductsCard from './HomeProductsCard/HomeProductsCard';
import Contact from '@/shared/components/Contact/Contact';
import AboutUs from '@/shared/components/AboutUs/AboutUs';
import AdvantagesWorkingWithUs from './AdvantagesWorkingWithUs/AdvantagesWorkingWithUs';
import OurWork from '@/shared/components/OurWork/OurWork';
import WoodType from '@/shared/components/WoodType/WoodType';
import Footer from '@/shared/components/Footer/Footer';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <img
        src={WoodImage}
        alt=""
        className="brightness-50 max-h-screen absolute top-0 left-0 select-none z-[-1]"
      />
      <HomeProductsCard />
      <WoodType />
      <OurWork />
      <AdvantagesWorkingWithUs />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}
