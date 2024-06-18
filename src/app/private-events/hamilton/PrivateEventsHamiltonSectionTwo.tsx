import Image from 'next/image';
import private_events_hamilton_three from '@/public/assets/private_events_hamilton_three.webp';
import { FaCheck } from 'react-icons/fa';
import { HeaderBold } from '@/src/util/fonts/fonts';

const PrivateEventsHamiltonSectionTwo = () => {
  const componentName = 'PRIVATE_EVENTS_HAMILTON_SECTION_TWO';
  return (
    <div
    className={`${componentName}_MAIN_CONTAINER grid md:grid-cols-2 h-full lg:min-h-[50dvh] gap-4 md:p-4`}
  >
    <div className={`${componentName}_MAIN_CONTENT_CONTAINER p-4`}>
      <h1
          className={`${HeaderBold.className} tracking-[-1px] leading-[42px] text-[32px] mb-4`}
        >
          Patio
        </h1>

        <p className='mb-4'>
          Surrounded by the vibrant energy of the city, this outdoor oasis is
          ideal for those who relish al fresco events. Embrace the natural charm
          of our Patio for an intimate or lively gathering beneath the open
          skies.
        </p>
        <p className='mb-4'>Capacity:</p>
        <ul>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>2,800 sq ft</p>
          </li>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>180 cocktail reception</p>
          </li>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>80 seated</p>
          </li>
        </ul>
      </div>
      <div
        className={`${componentName}_IMAGE_CONTAINER relative h-full flex items-center md:p-4`}
      >
        <div className='relative h-[45dvh] md:h-[50dvh] w-full'>
          <Image
            src={private_events_hamilton_three}
            alt='Private Events Hamilton'
            fill
            sizes='auto'
            className='floating_container object-cover'
            placeholder='blur'
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default PrivateEventsHamiltonSectionTwo;
