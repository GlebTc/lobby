import menuHamiltonBottleServiceBottles from '@/src/util/menu/hamilton/bottle_service/menuHamiltonBottleServiceBottles.json';
import MenuTitlePrice from '@/src/components/reusable/MenuTitlePrice';

const MenuHamiltonBottleServiceBottles = () => {
  const componentName = 'MENU_HAMILTON_BOTTLE_SERVICE_BOTTLES';
  return (
    <div>
      {menuHamiltonBottleServiceBottles.bottles.map((item, index) => {
        return (
          <div
            key={index}
            className={`${componentName}_BOTTLE_HEADING_AND_LIST_CONTAINER flex-flex-col gap-4`}
          >
            <h2
              className={`text-[#c69a50] tracking-tight border-b-2 my-4 pb-4`}
            >
              {item.bottle_title}
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
              {item.bottle_list.map((item, index) => {
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
      })}
    </div>
  );
};

export default MenuHamiltonBottleServiceBottles;
