import lobby_logo from '@/public/assets/lobby_logo.png';
import Image from 'next/image';
import navItems from '@/src/util/const/constants_main.json';

const NavDesktop = () => {
  const componentName = 'NAV_DESKTOP';

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
        className={`${componentName}_NAV_ITEMS flex gap-4 text-lg uppercase font-[600] items-center justify-end`}
      >
        {navItems.map((navItem, index) => (
          <a
            className={`${componentName}_MAPPED_NAV_ITEMS px-2 py-1 rounded-lg hover:bg-[var(--main-text-color)] hover:text-white duration-[var(--main-duration)]`}
            href={navItem.href}
            title={`Lobby Bar Restaurant | Desktop Menu | ${navItem.alt} Link`}
            aria-label={`Lobby Bar Restaurant | Desktop Menu | ${navItem.alt} Link`}
            key={index}
          >
            {navItem.title}
          </a>
        ))}
        <a
          href='/reservations'
          className={`${componentName}_NAVBAR_RESERVATION_BUTTON main_button`}
          title={`Lobby Bar Restaurant | Desktop Menu | Reservations Link`}
          aria-label={`Lobby Bar Restaurant | Desktop Menu | Reservations Link`}
        >
          Reservations
        </a>
      </div>
    </div>
  );
};

export default NavDesktop;
