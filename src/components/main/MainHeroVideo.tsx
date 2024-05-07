const MainHeroVideo = () => {
  const componentName = 'MAIN_HERO_VIDEO';

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER relative h-[415px] sm:h-[531px] md:h-[539px] lg:h-[calc(100dvh-65px-41px)]`}
    >
      <div
        className={`${componentName}_VIDEO_CONTAINER h-[100%] relative overflow-hidden`}
      >
        <video
          className='object-cover w-full h-full z-[-1]'
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
        className={`${componentName}_TEXT_AND_BUTTON_CONTAINER absolute top-0 left-0 w-[100%] h-[100%] flex flex-col gap-4 justify-center items-center text-white bg-gray-950/30 text-center`}
      >
        <h1>Pure Delight</h1>
        <p className="text-white pb-8">Vibrant Moments and Incredible Nights</p>
        <a
          href='#'
          className='secondary_button animate-bounce'
        >
          reservations
        </a>
      </div>
    </div>
  );
};

export default MainHeroVideo;
