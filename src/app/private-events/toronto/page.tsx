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
    </div>
  );
};

export default PrivateEventsToronto;
