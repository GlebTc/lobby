import PrivateEventsHamiltonMainHero from '@/src/app/private-events/hamilton/PrivateEventsHamiltonMainHero';
import PrivateEventsHamiltonSectionOne from '@/src/app/private-events/hamilton/PrivateEventsHamiltonSectionOne';
import PrivateEventsHamiltonSectionTwo from '@/src/app/private-events/hamilton/PrivateEventsHamiltonSectionTwo';
import PrivateEventsHamiltonSectionThree from '@/src/app/private-events/hamilton/PrivateEventsHamiltonSectionThree';
import PrivateEventsHamiltonSectionFour from '@/src/app/private-events/hamilton/PrivateEventsHamiltonSectionFour';
import PrivateEventsHamiltonSectionFive from '@/src/app/private-events/hamilton/PrivateEventsHamiltonSectionFive';
import PrivateEventsHamiltonSectionSix from '@/src/app/private-events/hamilton/PrivateEventsHamiltonSectionSix';

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
      <div className='w-full h-full flex justify-center text-center my-8'>
        <a
          href='#'
          className={`${componentName}_RESERVATION_BUTTON main_button`}
        >
          inquire now
        </a>
      </div>
    </div>
  );
};

export default PrivateEventsHamilton;
