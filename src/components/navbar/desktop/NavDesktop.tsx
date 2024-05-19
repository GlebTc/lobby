'use client';
import { useState } from 'react';
import lobby_logo from '@/public/assets/lobby_logo.png';
import Image from 'next/image';
import navItems from '@/src/util/const/constants_main.json';
import LocationPicker from '../LocationPicker';

const NavDesktop = () => {
  const componentName = 'NAV_DESKTOP';
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  const handleSelection = (itemHref: string) => {
    setSelectedMenuItem(itemHref);

    setShowLocationPicker(!showLocationPicker);
  };

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER bg-[var(--main-bg-color)] h-[65px] w-full flex justify-between items-center px-8`}
    >
      <a
        href='/'
        className='max-w-[64px] md:max-w-[76px] relative'
        aria-label='Lobby Bar Restaurant | Desktop Navbar Logo | Home Page Link'
        title='Lobby Bar Restaurant | Desktop Navbar Logo | Home Page Link'
      >
        <Image
          src={lobby_logo}
          alt={`Lobby Bar Restaurant | Desktop Navbar | Logo`}
          title={`Lobby Bar Restaurant | Desktop Navbar | Logo`}
          className='cursor-pointer object-contain'
        />
      </a>

      <div
        className={`${componentName}_NAV_ITEMS flex gap-8 text-md uppercase font-[500] items-center justify-end`}
      >
        <a
          href='/'
          title={`Lobby Bar Restaurant | Desktop Menu | Home Link`}
          aria-label={`Lobby Bar Restaurant | Desktop Menu | Home Link`}
          className={`${componentName}_MAPPED_NAV_ITEMS hover:text-[var(--secondary-color)] duration-[var(--main-duration)]`}
        >
          Home
        </a>
        {navItems.map((navItem, index) => (
          <div
            className={`${componentName}_MAPPED_NAV_ITEMS hover:text-[var(--secondary-color)] duration-[var(--main-duration)] cursor-pointer`}
            onClick={() => handleSelection(navItem.href)}
            title={`Lobby Bar Restaurant | Desktop Menu | ${navItem.alt} Link`}
            aria-label={`Lobby Bar Restaurant | Desktop Menu | ${navItem.alt} Link`}
            key={index}
          >
            {navItem.title}
          </div>
        ))}
        <div
          className={`${componentName}_NAVBAR_RESERVATION_BUTTON main_button`}
          onClick={() => handleSelection("reservations")}
          title={`Lobby Bar Restaurant | Desktop Menu | Reservations Link`}
          aria-label={`Lobby Bar Restaurant | Desktop Menu | Reservations Link`}
        >
          Reservations
        </div>
        <div>
          <LocationPicker
            showLocationPicker={showLocationPicker}
            setShowLocationPicker={setShowLocationPicker}
            selectedMenuItem={selectedMenuItem}
          />
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
