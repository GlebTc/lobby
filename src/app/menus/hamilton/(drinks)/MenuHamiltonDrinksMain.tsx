import MenuHamiltonDrinksCocktails from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksCocktails';
import MenuHamiltonDrinksBeer from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksBeer';
import MenuHamiltonDrinksWine from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksWine';
import MenuHamiltonDrinksZeroProof from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksZeroProof';

const MenuHamiltonDrinksMain = () => {
    const componentName = 'MENU_HAMILTON_DRINKS_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4`}>
      <MenuHamiltonDrinksCocktails />
      <MenuHamiltonDrinksBeer />
      <MenuHamiltonDrinksWine />
      <MenuHamiltonDrinksZeroProof />
    </div>
  );
};

export default MenuHamiltonDrinksMain;
