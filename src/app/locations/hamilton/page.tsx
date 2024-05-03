import lobby_hamilton from '@/public/assets/lobby_hamilton.webp';
import Image from 'next/image';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';

const locationsHamilton = () => {
  const componentName = 'LOCATIONS_HAMILTON';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER relative flex flex-col text-center gap-8`}
    >
      <div
        className={`${componentName}_IMAGE_CONTAINER relative h-[calc(100dvh-65px-41px)]`}
      >
        <Image
          src={lobby_hamilton}
          alt='Lobby Hamilton'
          fill
          className='object-cover object-bottom opacity-40'
        />
      </div>
      <div
        className={`${componentName}_INFO_CONTAINER absolute top-0 left-0 h-full w-full flex flex-col gap-8 px-4 justify-start items-center mt-8 text-[#02242D]`}
      >
        <h1 className='text-6xl font-[900]'>Hamilton</h1>
        <p className='text-2xl font-[900] flex items-censtartter gap-2'>
          <FaLocationDot /> 151 James St S, Hamilton, ON L8P 2Z5
        </p>
        <div className='rounded-md overflow-hidden w-screen h-[30dvh] sm:h-[40dvh] px-4 md:max-w-[1200px]'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.9554692516967!2d-79.87340822343756!3d43.252355078263385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9bd7449dc67f%3A0x30d1a147eb49173b!2slobby%20Hamilton!5e0!3m2!1sen!2sca!4v1714766257190!5m2!1sen!2sca'
            loading='lazy'
            className='object-contain w-full h-full'
          ></iframe>
        </div>
        <p className='uppercase text-xl font-[700] px-6 py-2 rounded-lg bg-[var(--main-text-color)] text-white hover:bg-[var(--main-bg-color)] duration-[var(--main-duration)] hover:text-black min-w-[150px] cursor-pointer flex items-center gap-2'>
          <FaPhone />
          (289) 389-3109
        </p>
      </div>
    </div>
  );
};

export default locationsHamilton;
