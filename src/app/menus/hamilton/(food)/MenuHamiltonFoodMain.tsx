import MenuHamiltonFoodAppetizers from '@/src/app/menus/hamilton/(food)/MenuHamiltonFoodAppetizers';
import MenuHamiltonFoodEntrees from '@/src/app/menus/hamilton/(food)/MenuHamiltonFoodEntrees';
import MenuHamiltonFoodSides from '@/src/app/menus/hamilton/(food)/MenuHamiltonFoodSides';
import MenuHamiltonFoodDesserts from '@/src/app/menus/hamilton/(food)/MenuHamiltonFoodDesserts';

const MenuHamiltonFoodMain = () => {
  const componentName = 'MENU_HAMILTON_FOOD_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4 uppercase`}>
      <MenuHamiltonFoodAppetizers />
      <MenuHamiltonFoodEntrees />
      <MenuHamiltonFoodSides />
      <MenuHamiltonFoodDesserts />
    </div>
  );
};

export default MenuHamiltonFoodMain;
