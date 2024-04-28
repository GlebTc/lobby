'use client';
import { useState } from 'react';
import Image from 'next/image';

const MainGallery = () => {
  const componentName = 'MAIN_PAGE_GALLERY';
  const imageUrlNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  const [currentIndex, setCurrentIndex] = useState<number>(3);
  const [timerOn, setTimerOn] = useState<boolean>(true);

  setTimeout(() => {
    if (timerOn) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex >= imageUrlNumber.length ? 0 : nextIndex);
    }
  }, 3000);

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER relative h-[40dvh] sm:h-[450px] md:h-[80dvh] w-full p-4`}
    >
      {imageUrlNumber.map((number, index) => {
        return (
          <div
            key={index}
            className={`absolute top-0 left-0 w-[100%] h-[100%]
            ${
              currentIndex === index
                ? 'opacity-100 duration-500 transition-opacity'
                : 'opacity-0 duration-500 transition-opacity'
            }
            `}
          >
            <Image
              src={`/assets/gallery/gallery_img_0${number}.webp`}
              alt={`gallery_img_0${number}`}
              fill
              className='object-cover w-full h-full'
            />
          </div>
        );
      })}
      <div
        className={`${componentName}_NAVIGATION_DOTS_CONTAINER absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-[5] p-2 w-fit mx-auto`}
        onMouseEnter={() => {
          setTimerOn(false);
        }}
        onMouseLeave={() => {
          setTimerOn(true);
        }}
      >
        {imageUrlNumber.map((_, index) => (
          <button
            aria-label='Advantages Slider Navigation Dot'
            title='Navigation Dot'
            key={index}
            className={`w-3 h-3 rounded-full bg-white border border-gray-300 ${
              index === currentIndex ? 'bg-yellow-600' : ''
            }`}
            onClick={() => {
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MainGallery;