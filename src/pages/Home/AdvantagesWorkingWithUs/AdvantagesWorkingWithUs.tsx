import Video from '@/assets/images/video.png';
import ButtonLink from '@/shared/components/ButtonLink';

export default function AdvantagesWorkingWithUs() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl text-neutral-100 font-kyiv pr-8 pt-48 space-y-5">
        <p>ADVANTAGES</p>
        <p>WORKING WITH US</p>
      </div>
      <div className="flex pt-28 pr-14 space-x-20 ">
        <img src={Video} alt="" className="h-[329px]" />
        <div className="text-neutral-100 text-2xl pb-28">
          <p>In-house carpentry</p>
          <p>production</p>
          <p className="pt-12">We only treat wood with</p>
          <p>environmentally friendly</p>
          <p>and safe products</p>
          <p className="pt-12">Prices from the manufacturer,</p>
          <p>no extra charges</p>
        </div>
      </div>
      <ButtonLink message="Receive a consultation" url={'#'} />
    </div>
  );
}
