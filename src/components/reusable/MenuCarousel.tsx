'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const MenuCarousel = () => {
  const componentName = 'MAIN_PAGE_GALLERY';
  const imageUrlArray: number[] = [1, 2, 3, 4, 5, 6, 7];
  const [currentIndex, setCurrentIndex] = useState<number>(3);
  const [timerOn, setTimerOn] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timerOn) {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex >= imageUrlArray.length ? 0 : nextIndex);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, timerOn]);

  const getPrevIndex = (index: number) => {
    return index === 0 ? imageUrlArray.length - 1 : index - 1;
  };

  const getNextIndex = (index: number) => {
    return index === imageUrlArray.length - 1 ? 0 : index + 1;
  };

  return (
    <div className='bg-[var(--main-bg-color)] py-2'>
      <div
        className={`${componentName}_MAIN_CONTAINER relative h-[40dvh] sm:h-[450px] md:h-[80dvh] w-full p-4 bg-[var(--main-bg-color)]`}
      >
        <div className='hidden lg:flex lg:flex-row lg:justify-center lg:items-center lg:h-full'>
          {/* Previous Image */}
          <div className='relative h-full w-1/3 opacity-50'>
            <Image
              src={`/assets/gallery/gallery_img_0${imageUrlArray[getPrevIndex(currentIndex)]}.webp`}
              alt={`Lobby Bar Restaurant | Main Page Carousel | Image 0${imageUrlArray[getPrevIndex(currentIndex)]}`}
              title={`Lobby Bar Restaurant | Main Page Carousel | Image 0${imageUrlArray[getPrevIndex(currentIndex)]}`}
              fill
              sizes='(max-width: 768px) 30vw, (max-width: 1200px) 30vw, 30vw'
              className='object-contain w-full h-full'
              quality={80} // Adjusted quality to 80
              loading='lazy'
            />
          </div>

          {/* Current Image */}
          <div className='relative h-full w-1/3'>
            <Image
              src={`/assets/gallery/gallery_img_0${imageUrlArray[currentIndex]}.webp`}
              alt={`Lobby Bar Restaurant | Main Page Carousel | Image 0${imageUrlArray[currentIndex]}`}
              title={`Lobby Bar Restaurant | Main Page Carousel | Image 0${imageUrlArray[currentIndex]}`}
              fill
              sizes='(max-width: 768px) 30vw, (max-width: 1200px) 30vw, 30vw'
              className='object-contain w-full h-full'
              quality={80} // Adjusted quality to 80
              loading='lazy'
            />
          </div>

          {/* Next Image */}
          <div className='relative h-full w-1/3 opacity-50'>
            <Image
              src={`/assets/gallery/gallery_img_0${imageUrlArray[getNextIndex(currentIndex)]}.webp`}
              alt={`Lobby Bar Restaurant | Main Page Carousel | Image 0${imageUrlArray[getNextIndex(currentIndex)]}`}
              title={`Lobby Bar Restaurant | Main Page Carousel | Image 0${imageUrlArray[getNextIndex(currentIndex)]}`}
              fill
              sizes='(max-width: 768px) 30vw, (max-width: 1200px) 30vw, 30vw'
              className='object-contain w-full h-full'
              quality={80} // Adjusted quality to 80
              loading='lazy'
            />
          </div>
        </div>

        <div className='lg:hidden'>
          {imageUrlArray.map((number, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-[100%] h-[100%] ${
                currentIndex === index
                  ? 'opacity-100 duration-1000 transition-opacity'
                  : 'opacity-0 duration-1000 transition-opacity'
              }`}
            >
              <Image
                src={`/assets/gallery/gallery_img_0${number}.webp`}
                alt={`Lobby Bar Restaurant | Main Page Carousel | Image 0${number}`}
                title={`Lobby Bar Restaurant | Main Page Carousel | Image 0${number}`}
                fill
                sizes='(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw'
                className='object-contain w-full h-full'
                quality={80} // Adjusted quality to 80
                loading='lazy'
              />
            </div>
          ))}
        </div>

        <div
          className={`${componentName}_NAVIGATION_DOTS_CONTAINER absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-[5] p-2 w-fit mx-auto`}
          onMouseEnter={() => setTimerOn(false)}
          onMouseLeave={() => setTimerOn(true)}
        >
          {imageUrlArray.map((_, index) => (
            <button
              aria-label='Lobby Bar Restaurant | Main Page Carousel Dots'
              title='Lobby Bar Restaurant | Main Page Carousel Dots'
              key={index}
              className={`w-4 h-4 rounded-full bg-white border border-gray-300 ${
                index === currentIndex ? 'bg-yellow-600' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCarousel;
