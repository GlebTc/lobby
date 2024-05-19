import menuTorontoBrunch from '@/src/util/menu/toronto/brunch/menuTorontoBrunch.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';

const MenuTorontoBrunchMenu = () => {
  const componentName = 'MENU_HAMILTON_BRUNCH_MENU';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8`}>
      {menuTorontoBrunch.brunch.map((item, index) => {
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
  );
};

export default MenuTorontoBrunchMenu;
