import LeftAboutUsCard from './AboutUsCard/LeftAboutUsCard';
import RightAboutUsCard from './AboutUsCard/RightAboutUsCard';

export default function AboutUs() {
  return (
    <div className="flex items-center min-h-svh">
      <div className="rounded-3xl rounded-l-none bg-darkRed shadow-md drop-shadow-glow p-10 flex">
        <LeftAboutUsCard />
        <RightAboutUsCard />
      </div>
    </div>
  );
}
