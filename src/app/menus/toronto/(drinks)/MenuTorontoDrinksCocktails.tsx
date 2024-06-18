import menuTorontoDrinksCocktails from '@/src/util/menu/toronto/drinks/menuTorontoDrinksCocktails.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuTorontoDrinksCocktails = () => {
  const componentName = 'MENU_TORONTO_DRINKS_COCKTAILS';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col pt-8`}>
      <h1
        className={`text-[#c69a50] ${HeaderRegular.className} font-[400] tracking-tight text-[35px]`}
      >
        {menuTorontoDrinksCocktails.title}
      </h1>
      <div className={`${componentName}_COCKTAILS_TYPES_MAIN_CONTAINER`}>
        {menuTorontoDrinksCocktails.cocktails.types.map((item, index) => {
          return (
            <div key={index}>
              <h2
                className={`text-[#c69a50] font-[300] tracking-tight text-[20px] text-left py-2`}
              >
                {item.cocktail_type_title}
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
                {item.cocktail_list.map((item, index) => {
                  return (
                    <MenuTitleDescriptionPrice
                      key={index}
                      individual_menu_item_title={item.name}
                      individual_menu_item_description={item.description}
                      individual_menu_item_description_two={
                        item.description_two
                      }
                      individual_menu_item_price_one={item.price}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTorontoDrinksCocktails;
