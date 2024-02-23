import Contact from '@/shared/components/Contact/Contact';
import Footer from '@/shared/components/Footer/Footer';
import OurWork from '@/shared/components/OurWork/OurWork';
import WoodType from '@/shared/components/WoodType/WoodType';

export default function Gallery() {
  return (
    <div>
      <OurWork />
      <WoodType />
      <Contact />
      <Footer />
    </div>
  );
}
