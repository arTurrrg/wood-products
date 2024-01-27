import OakWoodsType from './OakWoodsType';
import BukWoodsType from './BukWoodsType';
import AshWoodsType from './AshWoodsType';

export default function HomeWoodsType() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl text-neutral-100 font-[KyivTypeSans] pr-36 pt-48">
        <p>THE WOOD WE</p>
        <p>WORK WITH</p>
      </div>
      <div className="pt-28 grid grid-cols-3 gap-44">
        <OakWoodsType />
        <BukWoodsType />
        <AshWoodsType />
      </div>
    </div>
  );
}
