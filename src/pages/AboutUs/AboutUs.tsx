import AboutUs from '@/shared/components/AboutUs/AboutUs';
import Contact from '@/shared/components/Contact/Contact';
import Footer from '@/shared/components/Footer/Footer';
import OurWork from '@/shared/components/OurWork/OurWork';

export default function AboutUsPage() {
  return (
    <div className="mt-10">
      <AboutUs />
      <OurWork />
      <Contact />
      <Footer />
    </div>
  );
}
