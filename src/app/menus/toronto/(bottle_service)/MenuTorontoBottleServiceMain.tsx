import menuTorontoBottleServiceBottles from '@/src/util/menu/toronto/bottle_service/menuTorontoBottleServiceBottles.json';
import MenuTorontoBottleServiceBottles from '@/src/app/menus/toronto/(bottle_service)/MenuTorontoBottleServiceBottles';
import MenuTorontoBottleServicePackages from '@/src/app/menus/toronto/(bottle_service)/MenuTorontoBottleServicePackages';
import GratuityFootNote from '@/src/app/menus/(reusable)/GratuityFootNote';

const MenuTorontoBottlServiceMain = () => {
  const componentName = 'MENU_TORONTO_BOTTLE_SERVICE_MAIN';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8 p-4`}
    >
      <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
        {menuTorontoBottleServiceBottles.title}
      </h1>
      <MenuTorontoBottleServiceBottles />
      <MenuTorontoBottleServicePackages />
      <GratuityFootNote />
    </div>
  );
};

export default MenuTorontoBottlServiceMain;
