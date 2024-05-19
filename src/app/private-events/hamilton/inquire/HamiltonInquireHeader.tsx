import Image from "next/image";
import lobby_hamilton_logo from '@/public/assets/lobby_hamilton_logo.webp'

const HamiltonInquireHeader = () => {
  return (
    <div className='max-w-[80%] mx-auto uppercase flex flex-col gap-4 items-center border-b-[1px] border-black py-8'>
      <h2>Plannig a Special Occasion or Business Event</h2>
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
