import { useState } from 'react';
import { MoveLeft, MoveRight, Circle } from 'lucide-react';

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div>
      <div className="flex items-center pt-24 space-x-6">
        <button onClick={showPrevImage}>
          <MoveLeft className="text-wildBlue  hover:text-lightBlue size-12" />
        </button>
        <img src={imageUrls[imageIndex]} className="w-[850px]" />
        <button onClick={showNextImage}>
          <MoveRight className="text-wildBlue hover:text-lightBlue size-12" />
        </button>
      </div>
      <div className="flex items-center justify-center pt-4 space-x-4">
        {imageUrls.map((_, index) => (
          <button key={index} onClick={() => setImageIndex(index)}>
            {index === imageIndex ? (
              <Circle className="fill-azureWhite text-shadowBlue" />
            ) : (
              <Circle className="text-shadowBlue" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
