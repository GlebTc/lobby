import Image from 'next/image';
import lobby_hamilton_menu from '@/public/assets/lobby_hamilton_menu.webp';

const HamiltonMenuHeader = () => {
  const componentName = 'HAMILTON_MENU_HEADER';
  const menuListItems = ['drinks', 'food', 'brunch', 'bottle service'] 
  return (
    <div className={`${componentName}_MAIN_CONTAINER relative w-screen`}>
      <div className={`${componentName}_IMAGE_CONTAINER relative h-[306px]`}>
        <Image
          src={lobby_hamilton_menu}
          alt='Lobby Hamilton Menu'
          fill
          className='object-cover object-center opacity-80 z-[-1]'
        />
      </div>
      <div className={`${componentName}_MENU_LIST_CONTAINER absolute left-0 bottom-0 w-full`}>
        <ul className={`${componentName}_MENU_LIST flex  flex-col gap-1 bg-white`}>
          {menuListItems.map((item, index) => (
            <li key={index} className={`${componentName}_MENU_LIST_ITEM uppercase text-center bg-gray-200 w-full py-2`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamiltonMenuHeader;
