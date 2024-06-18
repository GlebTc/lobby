import Image from 'next/image';
import private_events_hamilton_four from '@/public/assets/private_events_hamilton_four.webp';
import { FaCheck } from 'react-icons/fa';
import { HeaderBold } from '@/src/util/fonts/fonts';

const PrivateEventsHamiltonSectionThree = () => {
  const componentName = 'PRIVATE_EVENTS_HAMILTON_SECTION_THREE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER grid md:grid-cols-2 h-full lg:min-h-[50dvh] gap-4 md:p-4`}
    >
      <div className={`${componentName}_MAIN_CONTENT_CONTAINER md:order-2 p-4`}>
        <h1
          className={`${HeaderBold.className}  leading-[42px] text-[32px] pb-4`}
        >
          Rooftop Terrace
        </h1>
        <p className='mb-4'>
          With a standing capacity for 80 guests and seating for 30, this
          elevated escape offers breathtaking views and a more intimate setting.
          Whether you choose to book it independently or in conjunction with the
          main patio, our Rooftop Terrace provides a unique and stylish backdrop
          for those seeking an elevated experience in the heart of Hamilton.
        </p>
        <p className='mb-4'>Capacity:</p>
        <ul>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>900 sq ft</p>
          </li>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>80 cocktail reception</p>
          </li>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>30 seated</p>
          </li>
        </ul>
      </div>
      <div
        className={`${componentName}_IMAGE_CONTAINER relative h-full flex items-center md:p-4`}
      >
        <div className='relative h-[45dvh] md:h-[50dvh] w-full'>
          <Image
            src={private_events_hamilton_four}
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

export default PrivateEventsHamiltonSectionThree;
