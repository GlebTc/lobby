import menuHamiltonBrunch from '@/src/util/menu/hamilton/brunch/menuHamiltonBrunch.json';
import MenuHamiltonBrunchTower from './MenuHamiltonBrunchTower';
import MenuHamiltonBrunchMenu from '@/src/app/menus/hamilton/(brunch)/MenuHamiltonBrunchMenu';
import MenuHamiltonDinnerDesserts from '../(dinner)/MenuHamiltonDinnerDesserts';
import MenuHamiltonBrunchHours from './MenuHamiltonBrunchHours';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonMain = () => {
  const componentName = 'MENU_HAMILTON_BRUNCH_MAIN';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col gap-4 pt-2 p-8`}
    >
      <MenuHamiltonBrunchHours />
      <h1 className={`text-[#c69a50] ${HeaderRegular.className} mb-2`}>
        {menuHamiltonBrunch.title}
      </h1>

      <div className={`${componentName}_BRUNCH_OPTIONS grid md:grid-cols-2 gap-20 items-center`}>
        <MenuHamiltonBrunchTower />
        <MenuHamiltonBrunchMenu />
      </div>
      <MenuHamiltonDinnerDesserts />
    </div>
  );
};

export default MenuHamiltonMain;
