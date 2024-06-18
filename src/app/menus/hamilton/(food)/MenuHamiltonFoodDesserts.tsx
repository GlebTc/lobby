import menuHamiltonFoodDesserts from '@/src/util/menu/hamilton/food/menuHamiltonFoodDesserts.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonFoodDesserts = () => {
  const componentName = 'MENU_HAMILTON_FOODS_DESSERTS';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-2 pt-8`}>
      <h1
        className={`text-[#c69a50] ${HeaderRegular.className} font-[400] tracking-tight text-[35px]`}
      >
        {menuHamiltonFoodDesserts.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        {menuHamiltonFoodDesserts.desserts.map((item, index) => {
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

export default MenuHamiltonFoodDesserts;
