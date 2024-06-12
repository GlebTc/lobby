import Image from 'next/image';
import private_events_toronto_two from '@/public/assets/private_events_toronto_two.webp';
import TorontoInquireHeader from './TorontoInquireHeader';
import TorontoInquireForm from './TorontoInquireForm';

const Inquire = () => {
  const componentName = 'TORONTO_INQUIRE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER relative bg-[var(--main-bg-color)]`}
    >
      <div className='h-[102px] md:h-[185px] relative'>
        <Image
          src={private_events_toronto_two}
          fill
          sizes='auto'
          alt='Private Events Hamilton Inquire'
          className='object-cover w-full h-full'
          quality={100}
          priority
        />
      </div>
      <div className='mb-12'>
        <TorontoInquireHeader />
      </div>
      <TorontoInquireForm />
    </div>
  );
};

export default Inquire;
