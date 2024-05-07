import Image from 'next/image';
import private_events_hamilton_six from '@/public/assets/private_events_hamilton_six.webp';
import { FaCheck } from 'react-icons/fa';

const PrivateEventsHamiltonSectionFive = () => {
  const componentName = 'PRIVATE_EVENTS_HAMILTON_SECTION_FIVE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER grid md:grid-cols-2 h-full lg:min-h-[50dvh]`}
    >
      <div className={`${componentName}_MAIN_CONTENT_CONTAINER md:order-2 p-4`}>
        <h1 className='pb-4'>Food & Beverage</h1>
        <p className='mb-4'>
          From enticing appetizers to savory entrées, our culinary offerings are
          complemented by an extensive selection of cocktails, beer, and wine.
          Elevate your dining experience in the heart of Hamilton, where
          exceptional cuisine and a curated drink menu converge to create a
          memorable and well-rounded celebration for your palate.
        </p>
      </div>
      <div
        className={`${componentName}_IMAGE_CONTAINER h-full flex items-center md:p-4`}
      >
        <div className='relative h-[40dvh] md:h-[50dvh] w-full'>
          <Image
            src={private_events_hamilton_six}
            alt='Private Events Hamilton'
            fill
            sizes='100'
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

export default PrivateEventsHamiltonSectionFive;
