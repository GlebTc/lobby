import menuHamiltonDrinksBeer from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksBeer.json';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonDrinksBeer = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_BEER';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col pt-8`}>
      <h1
        className={`text-[#c69a50] ${HeaderRegular.className} font-[400] tracking-tight text-[35px] mb-2`}
      >
        {menuHamiltonDrinksBeer.title}
      </h1>
      <div
        className={`${componentName}_DRAUGHTS_HEADING_AND_LIST_CONTAINER flex flex-col`}
      >
        <h2
          className={`text-[#c69a50] ${HeaderRegular.className} font-[400] tracking-tight text-[26px] text-left mb-8`}
        >
          Draughts
        </h2>
        <div
          className={`${componentName}_DRAUGHTS_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-8`}
        >
          {menuHamiltonDrinksBeer.beers.draughts.map((draught_type, index) => {
            return (
              <div key={index}>
                <table
                  className={`${componentName}_DRAUGHTS_TABLE w-full text-center`}
                >
                  <thead>
                    <tr>
                      <th
                        className={`text-[#c69a50] ${HeaderRegular.className} font-[400] tracking-tight text-[24px] text-left mb-8 w-[80%]`}
                      >
                        {draught_type.draught_type_title}
                      </th>
                      <th
                        className={`${HeaderRegular.className} italic text-[14px] lowercase min-w-[60px] text-left`}
                      >
                        20 oz
                      </th>
                      <th
                        className={`${HeaderRegular.className} italic text-[14px] lowercase min-w-[60px] text-left`}
                      >
                        16 oz
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {draught_type.draught_list.map((beer, index) => (
                      <tr key={index}>
                        <td>
                          <p className='text-left w-[80%]'>{beer.brand}</p>
                        </td>
                        <td className='min-w-[60px] text-left'>
                          ${beer.price_20}
                        </td>
                        <td className='min-w-[60px] text-left'>
                          ${beer.price_16}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`${componentName}_BOTTLES_CANS_HEADING_AND_LIST_CONTAINER flex-flex-col mt-12`}
      >
        <h1
          className={`text-[#c69a50] ${HeaderRegular.className} font-[400] tracking-tight text-[35px]`}
        >
          {menuHamiltonDrinksBeer.title}
        </h1>
        <h2
          className={`text-[#c69a50] ${HeaderRegular.className} font-[400] tracking-tight text-[26px] text-left mt-4 mb-8`}
        >
          bottles/cans
        </h2>
        <div
          className={`${componentName}_BOTTLES_CANS_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-8`}
        >
          {menuHamiltonDrinksBeer.beers.bottles_cans.map(
            (bottle_cans_type, index) => {
              return (
                <div key={index}>
                  <table
                    className={`${componentName}_BOTTLES_CANS_TABLE uppercase w-full text-center`}
                  >
                    <thead>
                      <tr className='text-left'>
                        <th
                          className={`text-[#c69a50] ${HeaderRegular.className} font-[400] tracking-tight text-[24px] text-left mb-8`}
                        >
                          {bottle_cans_type.bottles_cans_type_title}
                        </th>
                        <th
                          className={`${HeaderRegular.className} italic text-[14px] lowercase w-[60px] text-left pr-4`}
                        >
                          355 ml
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bottle_cans_type.bottles_cans_list.map((beer, index) => (
                        <tr key={index}>
                          <td className='text-left'>{beer.brand}</td>
                          <td className='w-[60px] text-left pr-4'>
                            ${beer.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuHamiltonDrinksBeer;
