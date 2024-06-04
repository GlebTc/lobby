import PrivateEventsTorontoMainHero from '@/src/app/private-events/toronto/PrivateEventsTorontoMainHero';
import PrivateEventsTorontoSectionOne from './PrivateEventsTorontoSectionOne';
import PrivateEventsTorontoSectionTwo from './PrivateEventsTorontoSectionTwo';
import PrivateEventsTorontoSectionThree from './PrivateEventsTorontoSectionThree';
import PrivateEventsTorontoSectionFour from './PrivateEventsTorontoSectionFour';
import Link from 'next/link';

const PrivateEventsToronto = () => {
  const componentName = 'PRIVATE_EVENTS_TORONTO';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col md:gap-8`}>
      <PrivateEventsTorontoMainHero />
      <PrivateEventsTorontoSectionOne />
      <PrivateEventsTorontoSectionTwo />
      <PrivateEventsTorontoSectionThree />
      <PrivateEventsTorontoSectionFour />
      <Link
        aria-label={`Lobby Bar Restaurant | Private Events Inquire Toronto`}
        title={`Lobby Bar Restaurant | Private Events Inquire Toronto`}
        href='/private-events/toronto/inquire'
        className={`${componentName}_NAVBAR_RESERVATION_BUTTON main_button my-8 max-w-[155px] mx-auto`}
      >
        inquire now
      </Link>
    </div>
  );
};

export default PrivateEventsToronto;
