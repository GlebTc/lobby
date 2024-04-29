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
          alt='Main Hero Menu Image Two'
          fill
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
        <p>
          Embrace the night in style, surrounded by contemporary design and an
          atmosphere that's as lively as your spirits. Elevate your late-night
          experience at Lobby.
        </p>
        <a
          href='#'
          className='uppercase font-[600] border-2 border-white px-4 py-2 hover:bg-[var(--main-bg-color)] rounded-lg duration-[var(--main-duration)] hover:text-black'
        >
          reserve now
        </a>
      </div>
    </div>
  );
};

export default MainSectionTwo;
