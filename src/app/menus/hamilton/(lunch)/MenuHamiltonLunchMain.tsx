import MenuHamiltonLunchStarters from './MenuHamiltonLunchStarters';
import MenuHamiltonLunchMains from './MenuHamiltonLunchMains';
import MenuHamiltonDinnerDesserts from '../(dinner)/MenuHamiltonDinnerDesserts';
import MenuHamiltonLunchHours from './MenuHamiltonLunchHours';

const MenuHamiltonLunchMain = () => {
  const componentName = 'MENU_HAMILTON_LUNCH_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4`}>
      <MenuHamiltonLunchHours />
      <MenuHamiltonLunchStarters />
      <MenuHamiltonLunchMains />
      <MenuHamiltonDinnerDesserts />
    </div>
  );
};

export default MenuHamiltonLunchMain;
