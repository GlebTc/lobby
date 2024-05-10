import MenuTorontoFoodShare from '@/src/app/menus/toronto/(food)/MenuTorontoFoodShare';
import MenuTorontoChickenWings from './MenuTorontoChickenWings';
import MenuTorontoRolls from './MenuTorontoRolls'
import MenuHamiltonFoodDesserts from '../../hamilton/(food)/MenuHamiltonFoodDesserts';

const MenuTorontoFoodMain = () => {
  const componentName = 'MENU_TORONTO_FOOD_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4`}>
      <MenuTorontoFoodShare />
      <MenuTorontoChickenWings />
      <MenuTorontoRolls />
      <MenuHamiltonFoodDesserts />
    </div>
  );
};

export default MenuTorontoFoodMain;
