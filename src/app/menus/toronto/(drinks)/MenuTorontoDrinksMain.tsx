import MenuHamiltonDrinksBeer from '@/src/app/menus/toronto/(drinks)/MenuTorontoDrinksBeer';
import MenuTorontoDrinksCocktails from '@/src/app/menus/toronto/(drinks)/MenuTorontoDrinksCocktails';
import MenuTorontoDrinksWine from '@/src/app/menus/toronto/(drinks)/MenuTorontoDrinksWine';


const MenuTorontoDrinksMain = () => {
  const componentName = 'MENU_TORONTO_DRINKS_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4`}>
      <MenuHamiltonDrinksBeer />
      <MenuTorontoDrinksCocktails />
      <MenuTorontoDrinksWine />
    </div>
  );
};

export default MenuTorontoDrinksMain;
