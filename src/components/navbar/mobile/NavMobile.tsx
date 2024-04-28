'use client';
import { useState } from 'react';
import lobby_logo from '@/public/assets/lobby_logo.png';
import Image from 'next/image';
import { IoMenu } from 'react-icons/io5';
import { FaCalendarAlt } from 'react-icons/fa';
import MobileMenu from './MobileMenu';

const NavMobile = () => {
  const componentName = 'NAV_MOBILE';
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER bg-[var(--main-bg-color)] h-[65px] w-full flex justify-between items-center px-8`}
    >
      <IoMenu
        size={35}
        className='text-3xl cursor-pointer hover:scale-105 duration-[var(--main-duration)]'
        onClick={handleMobileMenu}
      />
      <Image
        src={lobby_logo}
        alt='Lobby Logo'
        className='max-h-[60%] w-auto object-contain'
        priority
      />
      <FaCalendarAlt
        size={25}
        className='text-3xl cursor-pointer hover:scale-105 duration-[var(--main-duration)]'
      />

      <MobileMenu
        mobileMenu={mobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
    </div>
  );
};

export default NavMobile;
