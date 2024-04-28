import lobby_logo from '@/public/assets/lobby_logo.png';
import Image from 'next/image';
import navItems from '@/src/util/const/constants_main.json';

const NavDesktop = () => {
  const componentName = 'NAV_DESKTOP';

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER bg-[var(--main-bg-color)] h-[65px] w-full flex justify-between items-center px-8`}
    >
      <Image
        src={lobby_logo}
        alt='Lobby Logo'
        className='max-h-[60%] w-auto object-contain'
        priority
      />

      <div
        className={`${componentName}_NAV_ITEMS flex gap-4 text-lg uppercase font-[600] items-center justify-end`}
      >
        {navItems.map((navItem, index) => (
          <a
            className={`${componentName}_MAPPED_NAV_ITEMS px-2 py-1 rounded-lg hover:bg-[var(--main-text-color)] hover:text-white duration-[var(--main-duration)]`}
            href={navItem.href}
            title={navItem.alt}
            aria-label={navItem.alt}
            key={index}
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
  );
};

export default NavDesktop;
