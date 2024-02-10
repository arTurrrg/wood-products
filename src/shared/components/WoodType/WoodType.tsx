import OakWoodType from './OakWoodType';
import BukWoodType from './BukWoodType';
import AshWoodType from './AshWoodType';

export default function WoodType() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl text-neutral-100 font-kyiv pr-36 pt-48">
        <p>THE WOOD WE</p>
        <p>WORK WITH</p>
      </div>
      <div className="pt-28 grid grid-cols-3 gap-44">
        <OakWoodType />
        <BukWoodType />
        <AshWoodType />
      </div>
    </div>
  );
}
