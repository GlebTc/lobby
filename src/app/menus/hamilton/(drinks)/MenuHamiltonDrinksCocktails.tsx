import menuHamiltonDrinksCocktails from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksCocktails.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';

const MenuHamiltonDrinksCocktails = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_COCKTAILS';
  // console.log(menuHamiltonDrinksCocktails.cocktails);
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
        {menuHamiltonDrinksCocktails.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8'>
        {menuHamiltonDrinksCocktails.cocktails.map((item, index) => {
          return (
            <MenuTitleDescriptionPrice
              key={index}
              individual_menu_item_title={item.name}
              individual_menu_item_description={item.description}
              individual_menu_item_price_one={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuHamiltonDrinksCocktails;
