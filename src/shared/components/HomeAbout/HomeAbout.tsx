import LeftAboutCard from './HomeAboutCard/LeftAboutCard';
import RightAboutCard from './HomeAboutCard/RightAboutCard';

export default function HomeAbout() {
  return (
    <div className="flex items-center min-h-screen justify-start">
      <div className="rounded-3xl rounded-l-none bg-[#1E0C06] shadow-md drop-shadow-glow p-10 min-w-[30%] flex">
        <LeftAboutCard />
        <RightAboutCard />
      </div>
    </div>
  );
}
