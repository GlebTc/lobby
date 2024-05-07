import Image from 'next/image';
import private_events_toronto_one from '@/public/assets/private_events_toronto_one.webp';

const PrivateEventsTorontoSectionFour = () => {
  const componentName = 'PRIVATE_EVENTS_TORONTO_SECTION_TWO';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER grid md:grid-cols-2 h-full`}
    >
      <div className={`${componentName}_MAIN_CONTENT_CONTAINER p-4`}>
        <h1 className='pb-4'>Your Next Steps</h1>

        <p className='mb-4'>
          Take the first step towards an extraordinary experience by clicking
          the 'Inquire Now' button below. Our dedicated team is here to
          customize your event, ensuring a seamless and unforgettable occasion
          in our vibrant and tropical urban oasis. Let's turn your vision into
          reality – complete the form and embark on a journey of exceptional
          celebrations at Lobby Toronto.
        </p>
      </div>
      <div
        className={`${componentName}_IMAGE_CONTAINER h-full flex items-center md:p-4`}
      >
        <div className='relative h-[40dvh] md:h-[50dvh] w-full'>
          <Image
            src={private_events_toronto_one}
            alt='Private Events Toronto'
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

export default PrivateEventsTorontoSectionFour;
