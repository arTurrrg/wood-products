import LeftAboutCard from './HomeAboutCard/LeftAboutCard';
import RightAboutCard from './HomeAboutCard/RightAboutCard';

export default function HomeAbout() {
  return (
    <div className="flex items-center min-h-svh">
      <div className="rounded-3xl rounded-l-none bg-[#1E0C06] shadow-md drop-shadow-glow p-10 flex">
        <LeftAboutCard />
        <RightAboutCard />
      </div>
    </div>
  );
}
