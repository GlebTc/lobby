import menuHamiltonHappyHourFood from '@/src/util/menu/hamilton/happy_hour/menuHamiltonHappyHourFood.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonHappyHourFood = () => {
  const componentName = 'MENU_HAMILTON_HAPPY_HOUR_FOOD';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col pt-8`}>
      <h1 className={`text-[#c69a50] ${HeaderRegular.className} mb-2`}>
        {menuHamiltonHappyHourFood.title}
      </h1>
      <div
        className={`${componentName}_FOOD_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8`}
      >
        {menuHamiltonHappyHourFood.food_list.map((item, index) => {
          return (
            <MenuTitleDescriptionPrice
              key={index}
              individual_menu_item_title={item.name}
              individual_menu_item_description={item.description}
              individual_menu_item_description_two={item.description_two}
              individual_menu_item_price_one={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuHamiltonHappyHourFood;
