import menuTorontoRolls from '@/src/util/menu/toronto/food/menuTorontoRolls.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import { GlacialIndifferenceRegular } from '@/src/util/fonts/fonts';

const MenuTorontoRolls = () => {
  const componentName = 'MENU_TORONTO_ROLLS';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1
        className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[35px]`}
      >
        {menuTorontoRolls.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8'>
        {menuTorontoRolls.shares.map((item, index) => {
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

export default MenuTorontoRolls;
