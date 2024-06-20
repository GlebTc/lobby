import Image from 'next/image';
import private_events_hamilton_seven from '@/public/assets/private_events_hamilton_seven.webp';
import Link from 'next/link';
import { HeaderBold } from '@/src/util/fonts/fonts';

const PrivateEventsHamiltonSectionSix = () => {
  const componentName = 'PRIVATE_EVENTS_HAMILTON_SECTION_SIX';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER grid md:grid-cols-2 h-full lg:min-h-[50dvh] gap-4 md:p-4`}
    >
      <div className={`${componentName}_MAIN_CONTENT_CONTAINER p-4 flex flex-col justify-center`}>
        <h1
          className={`${HeaderBold.className}  leading-[42px] text-[36px] pb-4`}
        >
          Your Next Steps
        </h1>

        <p className='mb-4 text-[14px]'>
          Ready to transform your event into an unforgettable experience? Our
          dedicated team is here to customize your experience. Let Lobby be the
          canvas for your next celebration, where exquisite cuisine, refreshing
          beverages, and exceptional service converge for a truly remarkable
          gathering in Hamilton.
        </p>
        <div className='w-full flex justify-center'>
          <Link
            aria-label={`Lobby Bar Restaurant | Private Events Inquire Hamilton`}
            title={`Lobby Bar Restaurant | Private Events Inquire Hamilton`}
            href='/private-events/hamilton/inquire'
            className={`${componentName}_NAVBAR_RESERVATION_BUTTON main_button my-8 max-w-[155px] mx-auto text-white`}
          >
            inquire now
          </Link>
        </div>
      </div>
      <div
        className={`${componentName}_IMAGE_CONTAINER relative h-full flex items-center md:p-4`}
      >
        <div className='relative h-[45dvh] md:h-[50dvh] w-full'>
          <Image
            src={private_events_hamilton_seven}
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

export default PrivateEventsHamiltonSectionSix;
