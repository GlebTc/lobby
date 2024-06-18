import MenuHamiltonHappyHourHours from "./MenuHamiltonHappyHourHours";
import MenuHamiltonHappyHourDrinks from "./MenuHamiltonHappyHourDrinks";

const MenuHamiltonDrinksMain = () => {
    const componentName = 'MENU_HAMILTON_HAPPY_HOUR_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4`}>
        <MenuHamiltonHappyHourHours />
        <MenuHamiltonHappyHourDrinks />
    </div>
  );
};

export default MenuHamiltonDrinksMain;
