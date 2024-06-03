import menuHamiltonDrinksZeroProof from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksZeroProof.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import MenuTitlePrice from '@/src/components/reusable/MenuTitlePrice';
import { GlacialIndifferenceRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonDrinksZeroProof = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_ZERO_PROOF';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col pt-8`}>
      <h1
        className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[35px] my-2`}
      >
        {menuHamiltonDrinksZeroProof.title}
      </h1>
      <div
        className={`${componentName}_MOCKTAILS_HEADING_AND_LIST_CONTAINER flex-flex-col gap-4`}
      >
        <h2
          className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[26px] text-left mb-8`}
        >
          mocktails
        </h2>
        <div
          className={`${componentName}_MOCKTAILS_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-2`}
        >
          {menuHamiltonDrinksZeroProof.zeros.mocktails.map((item, index) => {
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
        <h2
          className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[26px] text-left my-8`}
        >
          non alcoholic
        </h2>
        <div
          className={`${componentName}_NON_ALCOHOLIC_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-2`}
        >
          {menuHamiltonDrinksZeroProof.zeros.non_alcoholic.map(
            (item, index) => {
              return (
                <MenuTitlePrice
                  key={index}
                  individual_menu_item_title={item.name}
                  individual_menu_item_price_one={item.price}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuHamiltonDrinksZeroProof;
