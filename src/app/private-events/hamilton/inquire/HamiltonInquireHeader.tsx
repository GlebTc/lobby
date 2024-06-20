import Image from 'next/image';
import lobby_hamilton_logo from '@/public/assets/lobby_hamilton_logo.webp';
import { HeaderBold } from '@/src/util/fonts/fonts';

const HamiltonInquireHeader = () => {
  return (
    <div
      className={`${HeaderBold.className} max-w-[80%] md:max-w-[40%] mx-auto uppercase flex flex-col gap-2 items-center border-b-[1px] border-black py-4 text-center`}
    >
      <h2 className='text-[30px]'>
        Plannig a Special Occasion or Business Event?
      </h2>
      <h3 className='text-[24px]'>Host With Us At Lobby Hamilton!</h3>
      <Image
        src={lobby_hamilton_logo}
        alt='Lobby Hamilton Logo'
        quality={100}
        priority
        className='h-[90px] w-[120px]'
      />
    </div>
  );
};

export default HamiltonInquireHeader;
