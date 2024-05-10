import Image from 'next/image';
import main_section_two_img from '@/public/assets/main_section_two_img.webp';

const MainSectionTwo = () => {
  const componentName = 'MAIN_SECTION_TWO';
  return (
    <div className={`${componentName}_MAIN_CONTAINER relative h-[482px]`}>
      <div
        className={`${componentName}_OVERLAY_CONTAINER absolute top-0 left-0 h-full w-full bg-gray-950/50`}
      ></div>
      <div
        className={`${componentName}_BG_IMG_CONTAINER relative h-full w-full z-[-1]`}
      >
        <Image
          src={main_section_two_img}
          alt={`Lobby Bar Restaurant | Main Page Hero | Late Night Redefined Image`}
          title={`Lobby Bar Restaurant | Main Page Hero | Late Night Redefined Image`}
          fill
          sizes='1'
          className='object-cover md:fixed top-0 left-0 w-full h-full z-[-1]'
          placeholder='blur'
          priority
          quality={10}
        />
      </div>
      <div
        className={`${componentName}_TEXT_AND_BUTTON_CONTAINER absolute top-0 left-0 w-[100%] h-[100%] flex flex-col gap-4 justify-center items-center text-white bg-gray-950/50 text-center`}
      >
        <h1>Late Night Redefined</h1>
        <p className='text-white pb-8'>
          Embrace the night in style, surrounded by contemporary design and an
          atmosphere that's as lively as your spirits. Elevate your late-night
          experience at Lobby.
        </p>
        <a
          aria-label={`Lobby Bar Restaurant | Main Page | Late Night Redefined | Reserve Now Button`}
          title={`Lobby Bar Restaurant | Main Page | Late Night Redefined | Reserve Now Button`}
          href='/reservations'
          className={`${componentName}_RESERVATION_BUTTON secondary_button animate-bounce`}
        >
          reserve now
        </a>
      </div>
    </div>
  );
};

export default MainSectionTwo;
