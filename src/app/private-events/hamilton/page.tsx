import PrivateEventsHamiltonMainHero from '@/src/app/private-events/hamilton/PrivateEventsHamiltonMainHero';
import PrivateEventsHamiltonSectionOne from '@/src/app/private-events/hamilton/PrivateEventsHamiltonSectionOne';
import PrivateEventsHamiltonSectionTwo from '@/src/app/private-events/hamilton/PrivateEventsHamiltonSectionTwo';
import PrivateEventsHamiltonSectionThree from '@/src/app/private-events/hamilton/PrivateEventsHamiltonSectionThree';
import PrivateEventsHamiltonSectionFour from '@/src/app/private-events/hamilton/PrivateEventsHamiltonSectionFour';
import PrivateEventsHamiltonSectionFive from '@/src/app/private-events/hamilton/PrivateEventsHamiltonSectionFive';
import PrivateEventsHamiltonSectionSix from '@/src/app/private-events/hamilton/PrivateEventsHamiltonSectionSix';
import Link from 'next/link';

const PrivateEventsHamilton = () => {
  const componentName = 'PRIVATE_EVENTS_HAMILTON';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col md:gap-8`}>
      <PrivateEventsHamiltonMainHero />
      <PrivateEventsHamiltonSectionOne />
      <PrivateEventsHamiltonSectionTwo />
      <PrivateEventsHamiltonSectionThree />
      <PrivateEventsHamiltonSectionFour />
      <PrivateEventsHamiltonSectionFive />
      <PrivateEventsHamiltonSectionSix />
    </div>
  );
};

export default PrivateEventsHamilton;
