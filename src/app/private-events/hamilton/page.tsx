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
      <Link
        aria-label={`Lobby Bar Restaurant | Private Events Inquire Hamilton`}
        title={`Lobby Bar Restaurant | Private Events Inquire Hamilton`}
        href='/private-events/hamilton/inquire'
        className={`${componentName}_NAVBAR_RESERVATION_BUTTON main_button my-8 max-w-[155px] mx-auto`}
      >
        inquire now
      </Link>
    </div>
  );
};

export default PrivateEventsHamilton;
