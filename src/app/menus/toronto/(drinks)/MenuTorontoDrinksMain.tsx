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
      <p className='text-[10px] bg-gray-200 text-gray-600 tracking-wider p-8 my-8 capitalize'>
        ** Terms & Conditions - Bottomless Mimosas have a 2 hour serving limit,
        we are serving in compliance of smart serve guidelines. Sale & service
        of alcohol is conducted in compliance with liquor licence & control act
        of Ontario & we reserve the right to cut any persons off.
      </p>
    </div>
  );
};

export default MenuTorontoDrinksMain;
