import Image from 'next/image';
import private_events_hamilton_five from '@/public/assets/private_events_hamilton_five.webp';
import { FaCheck } from 'react-icons/fa';

const PrivateEventsHamiltonSectionFour = () => {
  const componentName = 'PRIVATE_EVENTS_HAMILTON_SECTION_FOUR';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER grid md:grid-cols-2 h-full`}
    >
      <div className={`${componentName}_MAIN_CONTENT_CONTAINER p-4`}>
        <h1 className='pb-4'>Private Room</h1>

        <p className='mb-4'>
          Seats 30 comfortably, with additional space for 45 standing, perfect
          for a flexible event format with passed hors d’oeuvres and cocktails.
          Ideal for vibrant receptions with guests enjoying passed canapés and
          mingling.
        </p>
        <p className='mb-4'>Capacity:</p>
        <ul>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>500 sq ft</p>
          </li>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>45 cocktail reception</p>
          </li>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>30 seated</p>
          </li>
        </ul>
      </div>
      <div
        className={`${componentName}_IMAGE_CONTAINER h-full flex items-center md:p-4`}
      >
        <div className='relative h-[40dvh] md:h-[50dvh] w-full'>
          <Image
            src={private_events_hamilton_five}
            alt='Private Events Hamilton'
            fill
            sizes='auto'
            className='floating_container object-cover'
            placeholder='blur'
            priority
            quality={10}
          />
        </div>
      </div>
    </div>
  );
};

export default PrivateEventsHamiltonSectionFour;
