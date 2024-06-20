import menuHamiltonLunchMains from '@/src/util/menu/hamilton/lunch/menuHamiltonLunchMains.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonLunchMains = () => {
  const componentName = 'MENU_HAMILTON_LUNCH_MAINS';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1 className={`text-[#c69a50] ${HeaderRegular.className} mb-2`}>
        {menuHamiltonLunchMains.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8'>
        {menuHamiltonLunchMains.mains.map((item, index) => {
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

export default MenuHamiltonLunchMains;
