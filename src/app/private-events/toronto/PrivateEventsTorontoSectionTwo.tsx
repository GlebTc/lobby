import Image from 'next/image';
import private_events_toronto_three from '@/public/assets/private_events_toronto_three.webp';
import { FaCheck } from 'react-icons/fa';
import { GlacialIndifferenceBold } from '@/src/util/fonts/fonts';

const PrivateEventsTorontoSectionTwo = () => {
  const componentName = 'PRIVATE_EVENTS_TORONTO_SECTION_TWO';
  return (
    <div
    className={`${componentName}_MAIN_CONTAINER grid md:grid-cols-2 h-full lg:min-h-[50dvh] gap-4 md:p-4`}
  >
    <div className={`${componentName}_MAIN_CONTENT_CONTAINER p-4`}>
      <h1
          className={`${GlacialIndifferenceBold.className} tracking-[-1px] leading-[42px] text-[32px] mb-4`}
        >
          The Mezzanine
        </h1>
        <p>
          The Mezzanine provides an elevated landing overlooking the main venue,
          designed with style and comfort in mind. Ideal for business socials
          and intimate special occasions.
        </p>
        <p className='mb-4'>
          Personalized menu options, private service staff, and optional Bottle
          Service packages ensure a tailored experience for every event hosted
          in this chic semi-private space.
        </p>
        <p className='mb-4'>Capacity:</p>
        <ul>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>50 cocktail reception</p>
          </li>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>25 seated</p>
          </li>
        </ul>
      </div>
      <div
        className={`${componentName}_IMAGE_CONTAINER relative h-full flex items-center md:p-4`}
      >
        <div className='relative h-[45dvh] md:h-[50dvh] w-full'>
          <Image
            src={private_events_toronto_three}
            alt='Private Events Toronto'
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

export default PrivateEventsTorontoSectionTwo;
