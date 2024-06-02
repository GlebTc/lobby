'use client';
import { useLocationPickerStore } from '@/src/util/stores/LocationPickerStore';
import localFont from 'next/font/local';
import Image from 'next/image';
import main_section_two_img from '@/public/assets/main_section_two_img.webp';

const GlacialIndifferenceBold = localFont({
  src: '../../../public/fonts/static-fonts/GlacialIndifference-Bold.otf',
  display: 'swap',
});

const GlacialIndifferenceRegular = localFont({
  src: '../../../public/fonts/static-fonts/GlacialIndifference-Regular.otf',
  display: 'swap',
});

const MainHeroVideo = () => {
  const componentName = 'MAIN_PAGE_HERO_VIDEO';
  const { showLocationPicker, setShowLocationPicker, setSelectedMenuItem } =
    useLocationPickerStore();

  const handleButtonClick = () => {
    setSelectedMenuItem('reservations');
    setShowLocationPicker(showLocationPicker);
  };

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER relative h-[415px] sm:h-[531px] md:h-[539px] lg:h-[calc(100dvh-65px-41px)]`}
    >
            <div className='fixed top-0 left-0 h-full w-full z-[-10]'>
        <Image
          src={main_section_two_img}
          alt='test'
          priority
          fill
          className='object-cover'
        />
      </div>
      <div
        className={`${componentName}_VIDEO_CONTAINER h-[100%] relative overflow-hidden`}
      >
        <video
          className='object-cover w-full h-full z-[-1]'
          aria-label={`Lobby Bar Restaurant | Main Page Hero Video`}
          autoPlay
          muted
          loop
        >
          <source
            src='/assets/lobby_hero_video.mp4'
            type='video/mp4'
          />
        </video>
      </div>
      <div
        className={`${componentName}_TEXT_AND_BUTTON_CONTAINER absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center text-white bg-gray-950/30 text-center`}
      >
        <h1
          className={`${GlacialIndifferenceBold.className} tracking-[-1px] leading-[42px] text-[42px]`}
        >
          Pure Delight
        </h1>
        <p
          className={`${GlacialIndifferenceRegular.className} text-white pb-4 text-[22px]`}
        >
          Vibrant Moments and Incredible Nights
        </p>
        <div
          aria-label={`Lobby Bar Restaurant | Main Page | Hero Video | Reserve Now Button`}
          title={`Lobby Bar Restaurant | Main Page | Hero Video | Reserve Now Button`}
          onClick={handleButtonClick}
          className={`${componentName}_RESERVATION_BUTTON secondary_button cursor-pointer tracking-wider text-[15px]`}
        >
          reservations
        </div>
      </div>
    </div>
  );
};

export default MainHeroVideo;
