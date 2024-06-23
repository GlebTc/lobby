import menuHamiltonBrunch from '@/src/util/menu/hamilton/brunch/menuHamiltonBrunch.json';
import MenuHamiltonBrunchTower from './MenuHamiltonBrunchTower';
import MenuHamiltonBrunchMenu from '@/src/app/menus/hamilton/(brunch)/MenuHamiltonBrunchMenu';
import MenuHamiltonDinnerDesserts from '../(dinner)/MenuHamiltonDinnerDesserts';
import MenuHamiltonBrunchHours from './MenuHamiltonBrunchHours';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonBrunchMain = () => {
  const componentName = 'MENU_HAMILTON_BRUNCH_MAIN';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col gap-4 pt-2 p-8`}
    >
      <MenuHamiltonBrunchHours />
      <div className='relative flex items-center mx-[40px]'>
        <div className='flex-grow border-t border-gray-300 border-1'></div>
        <h1
          className={`text-[#c69a50] ${HeaderRegular.className} font-[400] text-[35px] mx-4`}
        >
          {menuHamiltonBrunch.title}
        </h1>
        <div className='flex-grow border-t border-gray-300 border-1'></div>
      </div>

      <div
        className={`${componentName}_BRUNCH_OPTIONS grid md:grid-cols-2 gap-20 items-center`}
      >
        <MenuHamiltonBrunchTower />
        <MenuHamiltonBrunchMenu />
      </div>
      <MenuHamiltonDinnerDesserts />
    </div>
  );
};

export default MenuHamiltonBrunchMain;
