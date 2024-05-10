import menuHamiltonBrunch from '@/src/util/menu/hamilton/brunch/menuHamiltonBrunch.json';
import MenuHamiltonBrunchTower from './MenuHamiltonBrunchTower';
import MenuHamiltonBrunchMenu from '@/src/app/menus/hamilton/(brunch)/MenuHamiltonBrunchMenu';
import MenuHamiltonFoodDesserts from '../(food)/MenuHamiltonFoodDesserts';
import MenuHotBeverages from '@/src/app/menus/(reusable)/MenuHotBeverages';
import MimosasFootNote from '@/src/app/menus/(reusable)/MimosasFootNote';

const MenuHamiltonMain = () => {
  const componentName = 'MENU_HAMILTON_BRUNCH_MAIN';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8 p-4`}
    >
      <h1
        className={`${componentName}_HEADER text-[#c69a50] font-[300] tracking-tight`}
      >
        {menuHamiltonBrunch.title}
      </h1>
      <div className={`${componentName}_BRUNCH_OPTIONS grid md:grid-cols-2`}>
        <MenuHamiltonBrunchTower />
        <MenuHamiltonBrunchMenu />
      </div>
      <MenuHamiltonFoodDesserts />
      <MenuHotBeverages />
      <MimosasFootNote />
    </div>
  );
};

export default MenuHamiltonMain;
