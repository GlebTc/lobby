import menuHamiltonDinnerEntrees from '@/src/util/menu/hamilton/dinner/menuHamiltonDinnerEntrees.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import { HeaderRegular } from '@/src/util/fonts/fonts';
import MenuHamiltonDinnerSides from './MenuHamiltonDinnerSides';

const MenuHamiltonDinnerEntrees = () => {
  const componentName = 'MENU_HAMILTON_FOODS_ENTREES';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-2 pt-8`}>
      <h1 className={`text-[#c69a50] ${HeaderRegular.className} mb-2`}>
        {menuHamiltonDinnerEntrees.title}
      </h1>
      <div
        className={`${componentName}_COLUMNS_PARENT_CONTAINER grid md:grid-cols-2 lg:grid-cols-3 gap-x-8`}
      >
        <div>
          {menuHamiltonDinnerEntrees.entrees_one.map((item, index) => {
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
        <div>
          {menuHamiltonDinnerEntrees.entrees_two.map((item, index) => {
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
        <div className={`${componentName}_LAST_COLUMN`}>
          <div>
            {menuHamiltonDinnerEntrees.entrees_three.map((item, index) => {
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
          <MenuHamiltonDinnerSides />
        </div>
      </div>
    </div>
  );
};

export default MenuHamiltonDinnerEntrees;
