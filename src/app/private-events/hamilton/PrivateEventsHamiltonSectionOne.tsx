import Image from 'next/image';
import private_events_hamilton_two from '@/public/assets/private_events_hamilton_two.webp';
import { FaCheck } from 'react-icons/fa';
import { GlacialIndifferenceBold } from '@/src/util/fonts/fonts';

const PrivateEventsHamiltonSectionOne = () => {
  const componentName = 'PRIVATE_EVENTS_HAMILTON_SECTION_ONE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER grid md:grid-cols-2 h-full lg:min-h-[50dvh]`}
    >
      <div className={`${componentName}_MAIN_CONTENT_CONTAINER md:order-2 p-6`}>
      <h1
          className={`${GlacialIndifferenceBold.className} tracking-[-1px] leading-[42px] text-[32px]`}
        >Full Venue</h1>
        <p className='mb-4'>
          Our versatile and stylish venue is the perfect canvas for any
          occasion. Whether it's a corporate gathering or a special celebration,
          make your mark in this dynamic setting, where seamless design and
          functionality converge for an unforgettable experience.
        </p>
        <p className='mb-4'>Capacity:</p>
        <ul>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>3,800 sq ft</p>
          </li>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>204 cocktail reception</p>
          </li>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>100 seated</p>
          </li>
        </ul>
      </div>
      <div
        className={`${componentName}_IMAGE_CONTAINER h-full flex items-center md:p-4`}
      >
        <div className='relative h-[45dvh] md:h-[50dvh] w-full'>
          <Image
            src={private_events_hamilton_two}
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

export default PrivateEventsHamiltonSectionOne;
