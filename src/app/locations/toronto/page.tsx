import lobby_toronto from '@/public/assets/lobby_toronto.webp';
import Image from 'next/image';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';

const Toronto = () => {
  const componentName = 'LOCATIONS_TORONTO';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER relative flex flex-col text-center gap-8`}
    >
      <div
        className={`${componentName}_IMAGE_CONTAINER relative h-[calc(100dvh-65px-41px)]`}
      >
        <Image
          src={lobby_toronto}
          alt='Lobby Toronto'
          fill
          className='object-cover object-bottom opacity-40'
        />
      </div>
      <div
        className={`${componentName}_INFO_CONTAINER absolute top-0 left-0 h-full w-full flex flex-col gap-8 px-4 justify-start items-center mt-8 text-[#02242D]`}
      >
        <h1 className='text-6xl font-[900]'>Toronto</h1>
        <p className='text-2xl font-[900] flex items-censtartter gap-2'>
          <FaLocationDot /> 1032 Queen St W, Toronto, ON M6J 1H7
        </p>
        <div className='rounded-md overflow-hidden w-screen h-[30dvh] sm:h-[40dvh] px-4 md:max-w-[1200px]'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.7983650500826!2d-79.42182856087628!3d43.643941500331856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34fe0ec3206f%3A0xc8ad388db5051ab3!2s1032%20Queen%20St%20W%2C%20Toronto%2C%20ON%20M6J%201H7!5e0!3m2!1sen!2sca!4v1714693395192!5m2!1sen!2sca'
            loading='lazy'
            className='object-contain w-full h-full'
          ></iframe>
        </div>
        <p className='uppercase text-xl font-[700] px-6 py-2 rounded-lg bg-[var(--main-text-color)] text-white hover:bg-[var(--main-bg-color)] duration-[var(--main-duration)] hover:text-black min-w-[150px] cursor-pointer flex items-center gap-2'>
          <FaPhone />
          (416) 901-6768
        </p>
      </div>
    </div>
  );
};

export default Toronto;
