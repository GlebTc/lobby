import MenuHamiltonLunchStarters from './MenuHamiltonLunchStarters';
import MenuHamiltonLunchMains from './MenuHamiltonLunchMains';
import MenuHamiltonFoodDesserts from '../(food)/MenuHamiltonFoodDesserts';

const MenuHamiltonLunchMain = () => {
  const componentName = 'MENU_HAMILTON_LUNCH_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4`}>
      <MenuHamiltonLunchStarters />
      <MenuHamiltonLunchMains />
      <MenuHamiltonFoodDesserts />
    </div>
  );
};

export default MenuHamiltonLunchMain;
