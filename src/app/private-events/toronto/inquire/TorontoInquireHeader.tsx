import { HeaderBold } from '@/src/util/fonts/fonts';

const HamiltonInquireHeader = () => {
  return (
    <div
      className={`${HeaderBold.className} max-w-[80%] mx-auto uppercase flex flex-col gap-2 items-center border-b-[1px] border-black py-4`}
    >
      <h2 className='text-[19px] md:text-[28px] lg:text-[32px]'>
        Plannig a Special Occasion or Business Event?
      </h2>
      <h3 className='text-[16px] md:text-[24px] lg:text-[28px]'>
        Host With Us At Lobby Toronto!
      </h3>
    </div>
  );
};

export default HamiltonInquireHeader;
