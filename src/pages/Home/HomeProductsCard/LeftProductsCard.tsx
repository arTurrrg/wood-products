import ButtonLink from '@/shared/components/ButtonLink';

export default function LeftProductsCard() {
  return (
    <div className="flex-1">
      <div className="border-r border-neutral-100">
        <div className="pr-10">
          <div className="text-7xl font-[KyivTypeSans] text-neutral-100 leading-tight">
            <p>SOLID</p>
            <p>WOOD</p>
            <p>PRODUCTS</p>
          </div>
          <div className="mt-7">
            <div className="text-2xl text-[#FFDBBB]">
              <p>Oak, beech, ash from</p>
              <div>
                <span className="font-semibold">1700 CZK</span>
                <span> per m3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <ButtonLink message="Order" url="/" />
      </div>
    </div>
  );
}
