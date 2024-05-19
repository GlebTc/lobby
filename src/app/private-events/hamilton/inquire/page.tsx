import Image from 'next/image';
import private_events_hamilton_inquire from '@/public/assets/private_events_hamilton_inquire.webp';
import HamiltonInquireHeader from './HamiltonInquireHeader';

const Inquire = () => {
  const componentName = 'INQUIRE';
  return (
    <div className={`${componentName}_MAIN_CONTAINER relative`}>
      <div className='h-[185px] relative'>
        <Image
          src={private_events_hamilton_inquire}
          fill
          sizes='1'
          alt='Private Events Hamilton Inquire'
          className='object-cover w-full h-full'
          quality={10}
          priority
        />
      </div>
      <HamiltonInquireHeader />
    </div>
  );
};

export default Inquire;
