import React from 'react';

const MainHeroVideo = () => {
  const componentName = 'MAIN_HERO_VIDEO';
  const xsmallScreen = 'w-[220%] h-[145%] right-[-60%] top-[-22%]';
  const smallScreen = 'sm:w-[150%] sm:h-[100%] sm:right-[-25%] sm:top-0';
  const xlScreen = 'xl:h-[140%] xl:top-[-10%]';

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER relative h-[415px] sm:h-[531px] md:h-[539px] lg:h-[calc(100dvh-65px-41px)]`}
    >
      <div
        className={`${componentName}_VIDEO_CONTAINER h-[100%] w-[100%] relative overflow-hidden`}
      >
        <iframe
          src='https://www.youtube.com/embed/18x1Qp559Ic?autoplay=1&mute=1&controls=0&loop=1&playlist=18x1Qp559Ic'
          className={`${componentName}_IFRAME_CONTAINER absolute ${xsmallScreen} ${smallScreen} ${xlScreen}`}
          loading='lazy'
        ></iframe>
      </div>
      <div
        className={`${componentName}_TEXT_AND_BUTTON_CONTAINER absolute top-0 left-0 w-[100%] h-[100%] flex flex-col gap-4 justify-center items-center text-white bg-gray-950/50 text-center`}
      >
        <h1>Pure Delight</h1>
        <p>Vibrant Moments and Incredible Nights</p>
        <a
          href='#'
          className='uppercase font-[600] border-2 border-white px-4 py-2 hover:bg-[var(--main-bg-color)] rounded-lg duration-[var(--main-duration)] hover:text-black'
        >
          reservations
        </a>
      </div>
    </div>
  );
};

export default MainHeroVideo;
