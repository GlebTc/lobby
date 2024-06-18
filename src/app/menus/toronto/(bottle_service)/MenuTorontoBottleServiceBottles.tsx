import menuTorontoBottleServiceBottles from '@/src/util/menu/toronto/bottle_service/menuTorontoBottleServiceBottles.json';
import MenuTitlePrice from '@/src/components/reusable/MenuTitlePrice';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuTorontoBottleServiceBottles = () => {
  const componentName = 'MENU_TORONTO_BOTTLE_SERVICE_BOTTLES';
  console.log;
  return (
    <div>
      {menuTorontoBottleServiceBottles.bottles.map((item, index) => {
        return (
          <div
            key={index}
            className={`${componentName}_BOTTLE_HEADING_AND_LIST_CONTAINER flex flex-col gap-4`}
          >
            <h1
              className={`text-[#c69a50] ${HeaderRegular.className} font-[400] tracking-tight text-[35px]`}
            >
              {item.bottle_title}
            </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
              {item.bottle_list_one.map((item, index) => {
                return (
                  <MenuTitlePrice
                    key={index}
                    individual_menu_item_title={item.name}
                    individual_menu_item_price_one={item.price}
                  />
                );
              })}
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
              {item.bottle_list_two &&
                item.bottle_list_two.map((item, index) => {
                  return (
                    <MenuTitlePrice
                      key={index}
                      individual_menu_item_title={item.name}
                      individual_menu_item_price_one={item.price}
                    />
                  );
                })}
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
              {item.bottle_list_three &&
                item.bottle_list_three.map((item, index) => {
                  return (
                    <MenuTitlePrice
                      key={index}
                      individual_menu_item_title={item.name}
                      individual_menu_item_price_one={item.price}
                    />
                  );
                })}
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 mb-4'>
              {item.bottle_list_four &&
                item.bottle_list_four.map((item, index) => {
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

export default MenuTorontoBottleServiceBottles;
