'use client';
import menuItems from '@/src/util/const/constants_main.json';
import Link from 'next/link';
import { useLocationPickerStore } from '@/src/util/stores/LocationPickerStore';

interface MobileMenuProps {
  mobileMenu: boolean;
  handleMobileMenu: (value: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  mobileMenu,
  handleMobileMenu,
}) => {
  const componentName = 'MOBILE_MENU';
  const { showLocationPicker, setShowLocationPicker, setSelectedMenuItem } =
  useLocationPickerStore();


  const handleSelection = (itemHref: string) => {
    setSelectedMenuItem(itemHref);
    setShowLocationPicker(showLocationPicker);
    handleMobileMenu(false);
  };


  return (
    <ul
      className={`${componentName}_MAIN_CONTAINER absolute top-[65px] left-0w-full text-[16px] uppercase font-[500] leading-[20px]`}
    >
      <li
        className={`${
          mobileMenu ? 'h-[44px] py-[12px] ' : 'h-0 p-0 overflow-hidden'
        } duration-500 w-full bg-[var(--main-bg-color)] hover:bg-[var(--secondary-color)] hover:text-white cursor-pointer px-[30px]`}
      >
        <Link
          href='/'
          onClick={() => handleMobileMenu(false)}
        >
          Home
        </Link>
      </li>
      {menuItems.map((item, index) => (
        <li
          onClick={() => handleSelection(item.href)}
          key={index}
          className={`${
            mobileMenu ? 'h-[44px] py-[12px] ' : 'h-0 p-0 overflow-hidden'
          } duration-500 w-screen bg-[var(--main-bg-color)] hover:bg-[var(--secondary-color)] hover:text-white cursor-pointer px-[30px]`}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
