import menuHamiltonDrinksZeroProof from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksZeroProof.json';
import MenuTitlePrice from '@/src/components/reusable/MenuTitlePrice';

const MenuTorontoCoffee = () => {
  const componentName = 'MENU_TORONTO_COFFEE';
  return (
    <div>
      <h1
        className={`${componentName}_HEADER text-[#c69a50] font-[300] tracking-tight pb-12`}
      >
        Drinks
      </h1>
      <div
        className={`${componentName}_COFFEE_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-8`}
      >
        {menuHamiltonDrinksZeroProof.zeros.coffee.map((coffee, index) => {
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

export default MenuTorontoCoffee;
