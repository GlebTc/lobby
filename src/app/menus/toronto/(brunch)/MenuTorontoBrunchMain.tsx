import menuHamiltonBrunch from '@/src/util/menu/hamilton/brunch/menuHamiltonBrunch.json';
import MenuTorontoBrunchTower from '@/src/app/menus/toronto/(brunch)/MenuTorontoBrunchTower';
import MenuTorontoBrunchMenu from '@/src/app/menus/toronto/(brunch)/MenuTorontoBrunchMenu';
import MenuHamiltonFoodDesserts from '@/src/app/menus/hamilton/(food)/MenuHamiltonFoodDesserts';
import MenuHotBeverages from '@/src/app/menus/(reusable)/MenuHotBeverages';
import MimosasFootNote from '@/src/app/menus/(reusable)/MimosasFootNote';

const MenuTorontoBrunchMain = () => {
  const componentName = 'MENU_TORONTO_BRUNCH_MAIN';
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
        <MenuTorontoBrunchTower />
        <MenuTorontoBrunchMenu />
      </div>
      <MenuHamiltonFoodDesserts />
      <MenuHotBeverages />
    </div>
  );
};

export default MenuTorontoBrunchMain;
