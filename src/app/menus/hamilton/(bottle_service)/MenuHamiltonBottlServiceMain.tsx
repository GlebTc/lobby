import MenuHamiltonBottleServiceBottles from '@/src/app/menus/hamilton/(bottle_service)/MenuHamiltonBottleServiceBottles';
import MenuHamiltonBottleServicePackages from '@/src/app/menus/hamilton/(bottle_service)/MenuHamiltonBottleServicePackages';
import GratuityFootNote from '@/src/app/menus/(reusable)/GratuityFootNote';

const MenuHamiltonBottlServiceMain = () => {
  const componentName = 'MENU_HAMILTON_BOTTLE_SERVICE_MAIN';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8 p-4`}
    >
      <MenuHamiltonBottleServiceBottles />
      <MenuHamiltonBottleServicePackages />
      <GratuityFootNote />
    </div>
  );
};

export default MenuHamiltonBottlServiceMain;
