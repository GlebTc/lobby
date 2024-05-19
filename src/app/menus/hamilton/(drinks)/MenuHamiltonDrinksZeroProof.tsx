import menuHamiltonDrinksZeroProof from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksZeroProof.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import MenuTitlePrice from '@/src/components/reusable/MenuTitlePrice';


const MenuHamiltonDrinksZeroProof = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_ZERO_PROOF';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
        {menuHamiltonDrinksZeroProof.title}
      </h1>
      <div
        className={`${componentName}_MOCKTAILS_HEADING_AND_LIST_CONTAINER flex-flex-col gap-4`}
      >
        <h2
          className={`text-[#c69a50] font-[300] tracking-tight text-2xl text-center border-b-2 mb-4 pb-4`}
        >
          mocktails
        </h2>
        <div
          className={`${componentName}_MOCKTAILS_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-8`}
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
          className={`text-[#c69a50] font-[300] tracking-tight text-2xl text-center border-b-2 mb-4 py-4 mt-12`}
        >
          non alcoholic
        </h2>
        <div
          className={`${componentName}_NON_ALCOHOLIC_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-8`}
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
