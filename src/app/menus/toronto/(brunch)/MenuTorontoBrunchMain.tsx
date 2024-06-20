import menuTorontoBrunch from '@/src/util/menu/toronto/brunch/menuTorontoBrunch.json';
import MenuTorontoBrunchTower from '@/src/app/menus/toronto/(brunch)/MenuTorontoBrunchTower';
import MenuTorontoBrunchMenu from '@/src/app/menus/toronto/(brunch)/MenuTorontoBrunchMenu';
import MenuTorontoBrunchDrinks from '@/src/app/menus/toronto/(brunch)/MenuTorontoBrunchDrinks';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuTorontoBrunchMain = () => {
  const componentName = 'MENU_TORONTO_BRUNCH_MAIN';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col gap-4 pt-8 p-8`}
    >
      <div className='relative flex items-center mx-[40px]'>
        <div className='flex-grow border-t border-gray-300 border-1'></div>
        <h1
          className={`text-[#c69a50] ${HeaderRegular.className} font-[400] text-[35px] mx-4`}
        >
          {menuTorontoBrunch.title}
        </h1>
        <div className='flex-grow border-t border-gray-300 border-1'></div>
      </div>

      <div className={`${componentName}_BRUNCH_OPTIONS grid md:grid-cols-2 gap-20 items-center`}>
        <MenuTorontoBrunchTower />
        <MenuTorontoBrunchMenu />
      </div>
      <MenuTorontoBrunchDrinks />
    </div>
  );
};

export default MenuTorontoBrunchMain;
