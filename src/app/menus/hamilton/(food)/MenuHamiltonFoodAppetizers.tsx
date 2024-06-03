import menuHamiltonFoodAppetizers from '@/src/util/menu/hamilton/food/menuHamiltonFoodAppetizers.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import localFont from 'next/font/local';

const GlacialIndifferenceRegular = localFont({
  src: '../../../../../public/fonts/static-fonts/GlacialIndifference-Regular.otf',
  display: 'swap',
});

const MenuHamiltonFoodAppetizers = () => {
  const componentName = 'MENU_HAMILTON_FOODS_APPETIZERS';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1
        className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[35px]`}
      >
        {menuHamiltonFoodAppetizers.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        {menuHamiltonFoodAppetizers.appetizers.map((item, index) => {
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

export default MenuHamiltonFoodAppetizers;
