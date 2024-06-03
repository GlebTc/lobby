import menuHotBeverages from '@/src/util/menu/reusable/menuHotBeverages.json';
import MenuTitlePrice from '@/src/components/reusable/MenuTitlePrice';
import localFont from 'next/font/local';

const GlacialIndifferenceRegular = localFont({
  src: '../../../../public/fonts/static-fonts/GlacialIndifference-Regular.otf',
  display: 'swap',
});

const MenuHotBeverages = () => {
  const componentName = 'MENU_TORONTO_COFFEE';
  return (
    <div className={`${componentName}_MAIN_CONTAINER pt-8`}>
        <h2
          className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[26px] text-left my-8`}
        >
        Coffee
      </h2>
      <div
        className={`${componentName}_COFFEE_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-4`}
      >
        {menuHotBeverages.hot_beverages.map((coffee, index) => {
          return (
            <MenuTitlePrice
              key={index}
              individual_menu_item_title={coffee.name}
              individual_menu_item_price_one={coffee.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuHotBeverages;
