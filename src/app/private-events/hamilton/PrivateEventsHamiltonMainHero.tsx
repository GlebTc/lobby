import Image from 'next/image';
import private_events_hamilton_one from '@/public/assets/private_events_hamilton_one.webp';

const PrivateEventsHamiltonMainHero = () => {
  const componentName = 'PRIVATE_EVENTS_HAMILTON_MAIN_HERO';
  return (
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <div
        className={`${componentName}_IMAGE_CONTAINER relative h-[40dvh] md:h-[60dvh] lg:h-[calc(100dvh-var(--top-bar-h)-var(--menu-bar-h))] w-full`}
      >
        <Image
          src={private_events_hamilton_one}
          alt='Private Events Hamilton'
          fill
          className='object-cover'
          quality={10}
        />
        <div
          className={`${componentName}_IMAGE_OVERLAY absolute top-0 left-0 w-full h-full z-[1] bg-gray-900/30`}
        ></div>
        <div
          className={`${componentName}_IMAGE_OVERLAY_TEXT absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-4 text-white text-center z-[2]`}
        >
          <h1>Private Groups & Corporate Events</h1>
          <p className='text-white pb-8'>
            The lobby Hamilton venue is perfect for private groups, parties and
            corporate events
          </p>
          <a
            aria-label={`Lobby Bar Restaurant | Main Page | Hero Video | Reserve Now Button | Call 289-389-3109`}
            title={`Lobby Bar Restaurant | Main Page | Hero Video | Reserve Now Button | Call 289-389-3109`}
            href='tel:2893893109'
            className={`${componentName}_RESERVATION_BUTTON secondary_button`}
          >
            reserve now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivateEventsHamiltonMainHero;
