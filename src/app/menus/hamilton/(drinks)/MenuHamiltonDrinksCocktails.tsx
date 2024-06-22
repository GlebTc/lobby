import menuHamiltonDrinksCocktails from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksCocktails.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonDrinksCocktails = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_COCKTAILS';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col pt-8`}>
      <h1 className={`text-[#c69a50] ${HeaderRegular.className} mb-6`}>
        {menuHamiltonDrinksCocktails.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-10'>
        {menuHamiltonDrinksCocktails.cocktails.map((item, index) => {
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

export default MenuHamiltonDrinksCocktails;
