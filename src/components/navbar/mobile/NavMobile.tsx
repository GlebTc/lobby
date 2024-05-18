'use client';
import { useState } from 'react';
import lobby_logo from '@/public/assets/lobby_logo.png';
import Image from 'next/image';
import { IoMenu, IoClose } from 'react-icons/io5';
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
      className={`${componentName}_MAIN_CONTAINER bg-[var(--main-bg-color)] w-full flex flex-col relative`}
    >
      <div className={`${componentName}_NAVIGATION_CONTAINER relative flex justify-between items-center h-[65px] px-4`}>
        {mobileMenu ? (
          <IoClose
            size={25}
            className='text-3xl cursor-pointer hover:scale-105 duration-[var(--main-duration)] z-[20]'
            onClick={handleMobileMenu}
          />
        ) : (
          <IoMenu
            size={25}
            className='text-3xl cursor-pointer hover:scale-105 duration-[var(--main-duration)] z-[20]'
            onClick={handleMobileMenu}
          />
        )}
        <a
          href='/'
          className='max-w-[64px] md:max-w-[76px] relative'
          aria-label='Lobby Bar Restaurant | Mobile Navbar Logo | Home Page Link'
          title='Lobby Bar Restaurant | Mobile Navbar Logo | Home Page Link'
        >
          <Image
            src={lobby_logo}
            alt={`Lobby Bar Restaurant | Mobile Navbar | Logo`}
            title={`Lobby Bar Restaurant | Mobile Navbar | Logo`}
            className='cursor-pointer object-contain'
          />
        </a>
        <a
          href='/reservations'
          title={`Lobby Bar Restaurant | Desktop Navbar | Reservations Link`}
          aria-label={`Lobby Bar Restaurant | Desktop Navbar | Reservations Link`}
        >
          <FaCalendarAlt
            size={25}
            className='text-3xl cursor-pointer hover:scale-105 duration-[var(--main-duration)]'
          />
        </a>
      </div>
      <MobileMenu
        mobileMenu={mobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
    </div>
  );
};

export default NavMobile;
