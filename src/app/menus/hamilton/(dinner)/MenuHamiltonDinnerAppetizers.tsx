import menuHamiltonDinnerAppetizers from '@/src/util/menu/hamilton/dinner/menuHamiltonDinnerAppetizers.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonDinnerAppetizers = () => {
  const componentName = 'MENU_HAMILTON_DINNER_APPETIZERS';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1 className={`text-[#c69a50] ${HeaderRegular.className} mb-2`}>
        {menuHamiltonDinnerAppetizers.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8'>
        {menuHamiltonDinnerAppetizers.appetizers.map((item, index) => {
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

export default MenuHamiltonDinnerAppetizers;
