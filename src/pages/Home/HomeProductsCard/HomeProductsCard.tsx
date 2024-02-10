import LeftProductsCard from './LeftProductsCard';
import RightProductsCard from './RightProductsCard';

export default function HomeProductsCard() {
  return (
    <div className="flex items-center min-h-screen justify-end">
      <div className="rounded-3xl rounded-r-none bg-darkRed shadow-md drop-shadow-glow p-10 min-w-[30%] flex">
        <LeftProductsCard />
        <RightProductsCard />
      </div>
    </div>
  );
}
