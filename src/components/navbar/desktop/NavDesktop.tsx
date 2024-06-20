'use client';
import lobby_logo from '@/public/assets/lobby_logo.png';
import Image from 'next/image';
import navItems from '@/src/util/const/constants_main.json';
import { useLocationPickerStore } from '@/src/util/stores/LocationPickerStore';
import { BodyMedium } from '@/src/util/fonts/fonts';

const NavDesktop = () => {
  const componentName = 'NAV_DESKTOP';
  const { showLocationPicker, setShowLocationPicker, setSelectedMenuItem } =
    useLocationPickerStore();

  const handleSelection = (itemHref: string) => {
    setSelectedMenuItem(itemHref);
    setShowLocationPicker(showLocationPicker);
  };

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER bg-[var(--main-bg-color)] h-[var(--menu-bar-h)] w-full flex justify-between items-center px-20 text-[14px]`}
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
        className={`${componentName}_NAV_ITEMS flex md:gap-8 lg:gap-16 text-md uppercase font-[500] items-center justify-end`}
      >
        <a
          href='/'
          title={`Lobby Bar Restaurant | Desktop Menu | Home Link`}
          aria-label={`Lobby Bar Restaurant | Desktop Menu | Home Link`}
          className={`${componentName}_MAPPED_NAV_ITEMS hover:text-[var(--secondary-color)] duration-[var(--main-duration)] tracking-wider text-[14px] leading-[20px]`}
        >
          Home
        </a>
        {navItems.map((navItem, index) => (
          <div
            className={`${componentName}_MAPPED_NAV_ITEMS hover:text-[var(--secondary-color)] duration-[var(--main-duration)] cursor-pointer tracking-wider text-[14px] leading-[20px]`}
            onClick={() => handleSelection(navItem.href)}
            title={`Lobby Bar Restaurant | Desktop Menu | ${navItem.alt} Link`}
            aria-label={`Lobby Bar Restaurant | Desktop Menu | ${navItem.alt} Link`}
            key={index}
          >
            {navItem.title}
          </div>
        ))}
        <div
          className={`${componentName}_NAVBAR_RESERVATION_BUTTON ${BodyMedium.className} uppercase px-[20px] py-[10px] bg-[var(--secondary-color)] border-[1px] border-[var(--secondary-color)] hover:bg-[var(--main-bg-color)] duration-[var(--main-duration)] hover:text-[var(--secondary-color)] cursor-pointer text-center text-[15px] leading-[15px] text-white`}
          onClick={() => handleSelection('reservations')}
          title={`Lobby Bar Restaurant | Desktop Menu | Reservations Link`}
          aria-label={`Lobby Bar Restaurant | Desktop Menu | Reservations Link`}
        >
          Reservation
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
