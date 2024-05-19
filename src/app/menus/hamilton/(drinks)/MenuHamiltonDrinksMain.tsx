import MenuHamiltonDrinksCocktails from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksCocktails';
import MenuHamiltonDrinksBeer from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksBeer';
import MenuHamiltonDrinksWine from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksWine';
import MenuHamiltonDrinksZeroProof from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksZeroProof';
import MimosasFootNote from '@/src/app/menus/(reusable)/MimosasFootNote';
import MenuHotBeverages from '../../(reusable)/MenuHotBeverages';

const MenuHamiltonDrinksMain = () => {
    const componentName = 'MENU_HAMILTON_DRINKS_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4`}>
      <MenuHamiltonDrinksCocktails />
      <MenuHamiltonDrinksBeer />
      <MenuHamiltonDrinksWine />
      <MenuHamiltonDrinksZeroProof />
      <MenuHotBeverages />
    </div>
  );
};

export default MenuHamiltonDrinksMain;
