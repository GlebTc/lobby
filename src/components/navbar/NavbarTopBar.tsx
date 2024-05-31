import Image from 'next/image';
import main_section_two_img from '@/public/assets/main_section_two_img.webp';

const NavbarTopBar = () => {
  return (
    <div>
      <div className='bg-[#02242D] text-white font-bold tracking-wider min-h-[var(--top-bar-h)] flex flex-wrap justify-center items-center text-center text-sm p-2'>
        BRUNCH EVERY SUNDAY @ 10AM
      </div>
      <div className='fixed top-0 left-0 h-full w-full z-[-10]'>
        <Image
          src={main_section_two_img}
          alt='test'
          priority
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default NavbarTopBar;
