import Footer from '@/shared/components/Footer/Footer';
import { MapPin, PhoneCall } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen h-full flex flex-col justify-center">
        <div className="flex items-center justify-center gap-40">
          <div className="flex flex-col items-center justify-between text-neutral-100 text-2xl">
            <p className="text-7xl mb-24">CONTACT</p>
            <div className="space-y-10">
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
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21770.74960935584!2d28.845884599999994!3d46.99422395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97ea9742eac4d%3A0x677e28bd7061dda2!2sMi%20Piace!5e0!3m2!1sen!2s!4v1709889681922!5m2!1sen!2s"
            width="600"
            height="450"
            className="border-0 rounded-3xl"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
