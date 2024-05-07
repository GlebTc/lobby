import menuHamiltonFoodSides from '@/src/util/menu/hamilton/food/menuHamiltonFoodSides.json';
import MenuTitlePrice
 from '@/src/components/reusable/MenuTitlePrice';
const MenuHamiltonFoodSides = () => {
  const componentName = 'MENU_HAMILTON_FOODS_ENTREES';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
        {menuHamiltonFoodSides.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        {menuHamiltonFoodSides.sides.map((item, index) => {
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

export default MenuHamiltonFoodSides;
