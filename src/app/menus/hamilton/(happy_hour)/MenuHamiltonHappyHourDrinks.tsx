import menuHamiltonHappyHourDrinks from '@/src/util/menu/hamilton/happy_hour/menuHamiltonHappyHourDrinks.json';
import MenuTitleDescriptionPrice from '@/src/components/reusable/MenuTitleDescriptionPrice';
import { HeaderRegular } from '@/src/util/fonts/fonts';
import { HeaderBold } from '@/src/util/fonts/fonts';

const MenuHamiltonDrinksZeroProof = () => {
  const componentName = 'MENU_HAMILTON_HAPPY_HOUR_DRINKS';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col pt-8`}>
      <h1
        className={`text-[#c69a50] ${HeaderRegular.className} font-[400]  text-[35px] my-2`}
      >
        {menuHamiltonHappyHourDrinks.title}
      </h1>
      <div
        className={`${componentName}_BEER_HEADING_AND_LIST_CONTAINER flex-flex-col gap-4`}
      >
        <h2
          className={`text-[#c69a50] ${HeaderRegular.className} font-[400]  text-[26px] text-left mb-8`}
        >
          Beer{' '}
        </h2>
        <div
          className={`${componentName}_BEER_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-2`}
        >
          {menuHamiltonHappyHourDrinks.beer.map((item, index) => {
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

      <div
        className={`${componentName}_FROZEN_COCKTAILS_HEADING_AND_LIST_CONTAINER flex-flex-col gap-4`}
      >
        <h2
          className={`text-[#c69a50] ${HeaderRegular.className} font-[400]  text-[26px] text-left`}
        >
          Frozen Cocktails{' '}
        </h2>
        <p
          className={`${HeaderBold.className} text-left text-[#7d7d7d] text-[10px] mb-8`}
        >
          Ask your server for daily selections
        </p>

        <div
          className={`${componentName}_FROZEN_COCKTAILS_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-2`}
        >
          {menuHamiltonHappyHourDrinks.frozen_cocktails.map((item, index) => {
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

      <div
        className={`${componentName}_SIGNATURE_COCKTAILS_HEADING_AND_LIST_CONTAINER flex-flex-col gap-4`}
      >
        <h2
          className={`text-[#c69a50] ${HeaderRegular.className} font-[400]  text-[26px] text-left mb-8`}
        >
          Signature Cocktails{' '}
        </h2>
        <div
          className={`${componentName}_SIGNATURE_COCKTAILS_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-2`}
        >
          {menuHamiltonHappyHourDrinks.signature_cocktails.map(
            (item, index) => {
              return (
                <MenuTitleDescriptionPrice
                  key={index}
                  individual_menu_item_title={item.name}
                  individual_menu_item_description={item.description}
                  individual_menu_item_description_two={item.description_two}
                  individual_menu_item_price_one={item.price}
                />
              );
            }
          )}
        </div>
      </div>

      <div
        className={`${componentName}_WINE_HEADING_AND_LIST_CONTAINER flex-flex-col gap-4`}
      >
        <h2
          className={`text-[#c69a50] ${HeaderRegular.className} font-[400]  text-[26px] text-left`}
        >
          Wine{' '}
        </h2>
        <table
          className={`${componentName}_WINE_TABLE w-full text-center mb-8`}
        >
          <thead>
            <tr>
              <th
                className={`text-[#c69a50] ${HeaderRegular.className} font-[400]  text-[24px] text-left mb-8`}
              ></th>
              <th
                className={`${HeaderRegular.className} italic text-[14px] lowercase w-[50px]`}
              >
                6oz
              </th>
              <th
                className={`${HeaderRegular.className} italic text-[14px] lowercase w-[50px]`}
              >
                9oz
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className='text-left pr-12 text-[16px]'>
                  House Red or White
                </p>
              </td>
              <td>$9</td>
              <td>$12</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className={`${componentName}_COCKTAIL_TOWERS_HEADING_AND_LIST_CONTAINER flex-flex-col gap-4`}
      >
        <h2
          className={`text-[#c69a50] ${HeaderRegular.className} font-[400]  text-[26px] text-left mb-8`}
        >
          Cocktail Towers
        </h2>
        <div
          className={`${componentName}_COCKTAIL_TOWERS_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-2`}
        >
          {menuHamiltonHappyHourDrinks.cocktail_towers.map((item, index) => {
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
    </div>
  );
};

export default MenuHamiltonDrinksZeroProof;
