'use client';
import { AiOutlineClose } from 'react-icons/ai';
import lobby_logo from '@/public/assets/lobby_logo.png';
import Image from 'next/image';
import navItems from '@/src/util/const/constants_main.json';

const SecondaryMobileMenuBU = ({
  mobileMenu,
  handleMobileMenu,
}: {
  mobileMenu: boolean;
  handleMobileMenu: () => void;
}) => {
  const componentName = 'MOBILE_MENU';
  return (
    <>
      <div
        className={
          mobileMenu
            ? `${componentName}_OVERLAY md:hidden fixed left-0 top-0 w-full h-screen bg-gray-800/90 duration-300 z-[5]`
            : `${componentName}_OVERLAY hidden`
        }
      ></div>
      <div
        className={
          mobileMenu
            ? 'MOBILE_MENU md:hidden fixed right-0 top-0 w-[100%] min-[500px]:w-[50%] h-full bg-[#fff9ef]/95 p-3 ease-in-out duration-[var(--main-duration)] z-[10]'
            : 'MOBILE_MENU md:hidden fixed opacity-0 right-[-100%] top-0 w-[100%] min-[500px]:w-[50%] h-full bg-[#fff9ef]/95 p-3 ease-in duration-[var(--main-duration)] z-[10]'
        }
      >
        <div
          className={`${componentName}_CLOSE_BUTTON_AND_LOGO_CONTAINER h-[65px] flex justify-between items-center px-4 border-b-2 border-[#e09900]`}
        >
          <a
            href='/'
            className='max-w-[64px] md:max-w-[120px] relative'
            aria-label='Lobby Bar Restaurant | Mobile Navbar Logo | Open Menu | Home Page Link'
            title='Lobby Bar Restaurant | Mobile Navbar Logo | Open Menu | Home Page Link'
          >
            <Image
              src={lobby_logo}
              alt={`Lobby Bar Restaurant | Mobile Navbar Logo | Open Menu`}
              title={`Lobby Bar Restaurant | Mobile Navbar Logo | Open Menu`}
              className='object-contain'
            />
          </a>
          <AiOutlineClose
            aria-label='Lobby Bar Restaurant | Mobile Menu Close Button'
            title='Lobby Bar Restaurant | Mobile Menu Close Button'
            size={35}
            className='cursor-pointer hover:scale-105 duration-[var(--main-duration)]'
            onClick={handleMobileMenu}
          />
        </div>
        <div
          className={`${componentName}_NAV_ITEMS flex flex-col gap-4 text-lg uppercase font-[600] items-start justify-end mt-8 border-b-2 border-[#e09900] pb-8`}
        >
          {navItems.map((navItem, index) => (
            <a
              key={index}
              className={`${componentName}_MAPPED_NAV_ITEMS px-2 py-1 rounded-lg hover:bg-[var(--main-text-color)] hover:text-white duration-[var(--main-duration)]`}
              href={navItem.href}
              title={`Lobby Bar Restaurant | Mobile Menu | ${navItem.alt} Link`}
              aria-label={`Lobby Bar Restaurant | Mobile Menu | ${navItem.alt} Link`}
            >
              {navItem.title}
            </a>
          ))}
          <a
            href='/reservations'
            className={`${componentName}_NAVBAR_RESERVATION_BUTTON main_button`}
            title={`Lobby Bar Restaurant | Mobile Menu | Reservations Link`}
            aria-label={`Lobby Bar Restaurant | Mobile Menu | Reservations Link`}
          >
            Reservations
          </a>
        </div>
      </div>
    </>
  );
};

export default SecondaryMobileMenuBU;
