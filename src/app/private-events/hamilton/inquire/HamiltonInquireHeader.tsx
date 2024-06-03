import Image from 'next/image';
import lobby_hamilton_logo from '@/public/assets/lobby_hamilton_logo.webp';
import localFont from 'next/font/local';

const GlacialIndifferenceBold = localFont({
  src: '../../../../../public/fonts/static-fonts/GlacialIndifference-Bold.otf',
  display: 'swap',
});

const HamiltonInquireHeader = () => {
  return (
    <div
      className={`${GlacialIndifferenceBold.className} max-w-[80%] mx-auto uppercase flex flex-col gap-2 items-center border-b-[1px] border-black py-4`}
    >
      <h2 className='text-[19px]'>
        Plannig a Special Occasion or Business Event?
      </h2>
      <h3>Host With Us At Lobby Hamilton!</h3>
      <Image
        src={lobby_hamilton_logo}
        alt='Lobby Hamilton Logo'
        quality={10}
        priority
      />
    </div>
  );
};

export default HamiltonInquireHeader;
