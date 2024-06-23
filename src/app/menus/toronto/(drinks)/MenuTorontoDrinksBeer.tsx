import menuTorontoDrinksBeer from '@/src/util/menu/toronto/drinks/menuTorontoDrinksBeer.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonDrinksBeer = () => {
  const componentName = 'MENU_TORONTO_DRINKS_BEERS';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col pt-8`}>
      <h1 className={`text-[#c69a50] ${HeaderRegular.className} mb-6`}>
        {menuTorontoDrinksBeer.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-10'>
        {menuTorontoDrinksBeer.beers.map((item, index) => {
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

export default MenuHamiltonDrinksBeer;
