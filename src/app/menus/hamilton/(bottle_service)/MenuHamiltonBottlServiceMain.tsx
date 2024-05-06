import menuHamiltonBottleServiceBottles from '@/src/util/menu/hamilton/bottle_service/menuHamiltonBottleServiceBottles.json';
import MenuHamiltonBottleServiceBottles from '@/src/app/menus/hamilton/(bottle_service)/MenuHamiltonBottleServiceBottles';
import MenuHamiltonBottleServicePackages from '@/src/app/menus/hamilton/(bottle_service)/MenuHamiltonBottleServicePackages';

const MenuHamiltonBottlServiceMain = () => {
  const componentName = 'MENU_HAMILTON_BOTTLE_SERVICE_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8 p-4`}>
      <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
        {menuHamiltonBottleServiceBottles.title}
      </h1>
      <MenuHamiltonBottleServiceBottles />
      <MenuHamiltonBottleServicePackages />
    </div>
  );
};

export default MenuHamiltonBottlServiceMain;
