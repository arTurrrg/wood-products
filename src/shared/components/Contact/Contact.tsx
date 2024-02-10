import ButtonLink from '../ButtonLink';
import Wood from '@/assets/images/wood.png';

export default function Contact() {
  return (
    <div className="container pt-20">
      <p className="text-neutral-100 text-7xl font-kyiv flex justify-end">
        ANY QUESTIONS?
      </p>
      <div className="flex justify-end space-x-10">
        <div>
          <div className="mx-auto max-w-[400px] mt-10 space-y-5">
            <input
              type="text"
              placeholder="Your name"
              className="border-2 border-shadowBlue text-silver text-2xl bg-transparent outline-none w-full rounded-full px-5 py-2"
            />
            <input
              type="tel"
              placeholder="Your telephone number"
              className="border-2 border-shadowBlue text-silver text-2xl bg-transparent outline-none w-full rounded-full px-5 py-2"
            />
            <textarea
              rows={6}
              placeholder="Your Question"
              className="border-2 border-shadowBlue text-silver text-2xl bg-transparent outline-none w-full rounded-3xl px-5 py-2  resize-none"
            ></textarea>
            <div>
              <ButtonLink message="Send" url="/" />
            </div>
          </div>
        </div>
        <div className="mt-10 text-neutral-100 text-2xl">
          <p>Write to us and we will be sure to</p>
          <p>answer all your questions and give</p>
          <p>you a comprehensive consultation.</p>
          <div className="flex justify-end relative top-40">
            <img src={Wood} alt="" className="w-[477px] h-[482px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
