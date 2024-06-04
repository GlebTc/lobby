import Image from 'next/image';
import lobby_hamilton_menu from '@/public/assets/lobby_hamilton_menu.webp';
import { GlacialIndifferenceBold } from '@/src/util/fonts/fonts';

const MenuHeaderHamilton = ({
  category,
  setCategory,
}: {
  category: any;
  setCategory: any;
}) => {
  const componentName = 'HAMILTON_MENU_HEADER';
  const menuItems = ['drinks', 'food', 'brunch', 'bottle service']
  return (
    <div className={`${componentName}_MAIN_CONTAINER relative`}>
      <div className={`${componentName}_IMAGE_CONTAINER relative h-[306px]`}>
      <div className={`${componentName}_IMAGE_OVERLAY_AND_TEXT absolute top-0 left-0 w-full h-full bg-black/20 flex justify-center items-start text-white`}>
            <h1 className={`${GlacialIndifferenceBold.className} mt-12 md:mt-24 tracking-tight text-[30px] md:text-[60px]`}>hamilton</h1>
        </div>
        <Image
          src={lobby_hamilton_menu}
          alt='Lobby Hamilton Menu'
          fill
          className='object-cover object-center md:object-bottom opacity-80 z-[-1]'
        />
      </div>
      <div
        className={`${componentName}_MENU_LIST_CONTAINER absolute left-0 bottom-0 w-full`}
      >
        <ul
          className={`${componentName}_MENU_LIST flex flex-col md:flex-row gap-1 bg-white md:w-[80%] mx-auto`}
        >
          {menuItems.map((category: any, index: any) => (
            <li
              key={index}
              className={`${componentName}_MENU_LIST_ITEM uppercase text-center bg-gray-200 w-full py-2 cursor-pointer hover:bg-gray-300 transition-colors duration-300 ease-in-out`}
              onClick={() => setCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuHeaderHamilton;