import MenuHamiltonDinnerAppetizers from '@/src/app/menus/hamilton/(dinner)/MenuHamiltonDinnerAppetizers';
import MenuHamiltonDinnerEntrees from '@/src/app/menus/hamilton/(dinner)/MenuHamiltonDinnerEntrees';
import MenuHamiltonDinnerDesserts from '@/src/app/menus/hamilton/(dinner)/MenuHamiltonDinnerDesserts';
import MenuHamiltonDinnerHours from '@/src/app/menus/hamilton/(dinner)/MenuHamiltonDinnerHours';

const MenuHamiltonDinnerMain = () => {
  const componentName = 'MENU_HAMILTON_FOOD_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4 md:p-2`}>
      <MenuHamiltonDinnerHours />
      <MenuHamiltonDinnerAppetizers />
      <MenuHamiltonDinnerEntrees />
      <MenuHamiltonDinnerDesserts />
    </div>
  );
};

export default MenuHamiltonDinnerMain;
