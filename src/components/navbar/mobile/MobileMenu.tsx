'use client';
import { AiOutlineClose } from 'react-icons/ai';
import lobby_logo from '@/public/assets/lobby_logo.png';
import Image from 'next/image';
import navItems from '@/src/util/const/constants_main.json';

const MobileMenu = ({
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
            href='https://www.lobby.ca'
            className='max-w-[64px] md:max-w-[120px] relative'
            aria-label='Lobby Bar Restaurant | Home Page'
            title='Lobby Bar Restaurant | Home Page'
          >
            <Image
              src={lobby_logo}
              alt='Logo | Web Development Hamilton'
              className='cursor-pointer object-contain floating_container'
            />
          </a>
          <AiOutlineClose
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
              title={navItem.alt}
              aria-label={navItem.alt}
            >
              {navItem.title}
            </a>
          ))}
          <a
            href='#'
            className={`${componentName}_NAVBAR_RESERVATION_BUTTON px-2 py-1 rounded-lg bg-[var(--main-text-color)] text-white border-[1px] border-[var(--main-text-color)] hover:bg-[var(--main-bg-color)] duration-[var(--main-duration)] hover:text-black`}
          >
            Reservations
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
