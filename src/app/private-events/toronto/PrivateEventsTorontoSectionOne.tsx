import Image from 'next/image';
import private_events_toronto_two from '@/public/assets/private_events_toronto_two.webp';
import { FaCheck } from 'react-icons/fa';
import { HeaderBold } from '@/src/util/fonts/fonts';

const PrivateEventsTorontoSectionOne = () => {
  const componentName = 'PRIVATE_EVENTS_TORONTO_SECTION_ONE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER grid md:grid-cols-2 h-full lg:min-h-[50dvh] gap-4 md:p-4`}
    >
      <div className={`${componentName}_MAIN_CONTENT_CONTAINER md:order-2 p-4`}>
        <h1
          className={`${HeaderBold.className} leading-[42px] text-[32px] pb-4`}
        >
          Full Venue
        </h1>
        <p className='mb-4'>
          Step into an urban oasis in downtown Toronto's Queen West
          neighborhood, where Lobby offers a tropical escape with lush greenery,
          rose gold accents, and cozy leather finishes. Immerse yourself in
          delicious food, elevated cocktails, and a curated wine selection while
          enjoying the warm and thoughtful ambiance that enhances any
          celebration or business gathering.
        </p>
        <p className='mb-4'>Capacity:</p>
        <ul>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>2,300 sq ft</p>
          </li>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>250 cocktail reception</p>
          </li>
          <li className='flex items-center gap-2'>
            <FaCheck />
            <p>70 seated</p>
          </li>
        </ul>
      </div>
      <div
        className={`${componentName}_IMAGE_CONTAINER relative h-full flex items-center md:p-4`}
      >
        <div className='relative h-[45dvh] md:h-[50dvh] w-full'>
          <Image
            src={private_events_toronto_two}
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

export default PrivateEventsTorontoSectionOne;
