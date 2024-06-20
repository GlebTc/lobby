import Image from 'next/image';
import private_events_hamilton_inquire from '@/public/assets/private_events_hamilton_inquire.webp';
import HamiltonInquireHeader from './HamiltonInquireHeader';
import HamiltonInquireForm from './HamiltonInquireForm';

const Inquire = () => {
  const componentName = 'HAMILTON_INQUIRE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER relative bg-[#FFFEF7]`}
    >
      <div className='h-[102px] md:h-[185px] relative'>
        50
        <Image
          src={private_events_hamilton_inquire}
          fill
          sizes='auto'
          alt='Private Events Hamilton Inquire'
          className='object-cover w-full h-full'
          quality={100}
          priority
        />
      </div>
      <div className='mb-12'>
        <HamiltonInquireHeader />
      </div>
      <HamiltonInquireForm />
    </div>
  );
};

export default Inquire;
