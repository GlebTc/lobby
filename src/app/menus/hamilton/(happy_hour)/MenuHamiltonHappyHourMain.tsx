import MenuHamiltonHappyHourHours from './MenuHamiltonHappyHourHours';
import MenuHamiltonHappyHourDrinks from './MenuHamiltonHappyHourDrinks';
import MenuHamiltonHappyHourFood from './MenuHamiltonHappyHourFood';
import MenuHamiltonHappyHourHappyDays from './MenuHamiltonHappyHourHappyDays';
const MenuHamiltonDrinksMain = () => {
  const componentName = 'MENU_HAMILTON_HAPPY_HOUR_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4`}>
      <MenuHamiltonHappyHourHours />
      <MenuHamiltonHappyHourDrinks />
      <MenuHamiltonHappyHourFood />
      <MenuHamiltonHappyHourHappyDays />
    </div>
  );
};

export default MenuHamiltonDrinksMain;
