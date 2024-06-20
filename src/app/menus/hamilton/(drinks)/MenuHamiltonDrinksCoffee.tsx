import menuHamiltonDrinksCoffee from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksCoffee.json';
import MenuTitlePrice from '@/src/components/reusable/MenuTitlePrice';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonDrinksCoffee = () => {
  const componentName = 'MENU_TORONTO_COFFEE';
  return (
    <div className={`${componentName}_MAIN_CONTAINER pt-8`}>
        <h2
          className={`text-[#c69a50] ${HeaderRegular.className} text-left my-8`}
        >
        Coffee
      </h2>
      <div
        className={`${componentName}_COFFEE_LIST_CONTAINER grid gap-6 max-w-[530px]`}
      >
        {menuHamiltonDrinksCoffee.hot_beverages.map((item, index) => {
          return (
            <MenuTitlePrice
              key={index}
              individual_menu_item_title={item.name}
              individual_menu_item_price_one={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuHamiltonDrinksCoffee;
