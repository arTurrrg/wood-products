import Price from '@/assets/images/price.png';
import Price2 from '@/assets/images/price.png';
import Price3 from '@/assets/images/price.png';
import Contact from '@/shared/components/Contact/Contact';
import Footer from '@/shared/components/Footer/Footer';
import { ImageSlider } from '@/shared/components/ImageSlider';

const images = [Price, Price2, Price3];

export default function PricesForServices() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="text-7xl text-neutral-100 font-kyiv pr-72 pt-48">
          <p>PRICE LIST</p>
        </div>
        <div>
          <ImageSlider imageUrls={images} />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
