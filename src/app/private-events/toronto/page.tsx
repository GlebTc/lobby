import PrivateEventsTorontoMainHero from '@/src/app/private-events/toronto/PrivateEventsTorontoMainHero';
import PrivateEventsTorontoSectionOne from './PrivateEventsTorontoSectionOne';
import PrivateEventsTorontoSectionTwo from './PrivateEventsTorontoSectionTwo';
import PrivateEventsTorontoSectionThree from './PrivateEventsTorontoSectionThree';
import PrivateEventsTorontoSectionFour from './PrivateEventsTorontoSectionFour';

const PrivateEventsToronto = () => {
  const componentName = 'PRIVATE_EVENTS_TORONTO';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col md:gap-8`}>
      <PrivateEventsTorontoMainHero />
      <PrivateEventsTorontoSectionOne />
      <PrivateEventsTorontoSectionTwo />
      <PrivateEventsTorontoSectionThree />
      <PrivateEventsTorontoSectionFour />
      <div className='w-full h-full flex justify-center text-center my-8'>
        <a
          aria-label={`Lobby Bar Restaurant | Locations Toronto | Call (416) 901-6768`}
          title={`Lobby Bar Restaurant | Locations Toronto | Call (416) 901-6768`}
          href='tel:4169016768'
          className={`${componentName}_NAVBAR_RESERVATION_BUTTON main_button`}
        >
          inquire now
        </a>
      </div>
    </div>
  );
};

export default PrivateEventsToronto;
