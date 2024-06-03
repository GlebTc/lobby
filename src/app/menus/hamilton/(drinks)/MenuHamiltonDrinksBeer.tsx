import menuHamiltonDrinksBeer from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksBeer.json';
import localFont from 'next/font/local';

const GlacialIndifferenceRegular = localFont({
  src: '../../../../../public/fonts/static-fonts/GlacialIndifference-Regular.otf',
  display: 'swap',
});

const MenuHamiltonDrinksBeer = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_BEER';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col pt-8`}>
      <h1
        className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[35px] mb-2`}
      >
        {menuHamiltonDrinksBeer.title}
      </h1>
      <div
        className={`${componentName}_DRAUGHTS_HEADING_AND_LIST_CONTAINER flex flex-col`}
      >
        <h2
          className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[26px] text-left mb-8`}
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
                        className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[24px] text-left mb-8`}
                      >
                        {draught_type.draught_type_title}
                      </th>
                      <th className='italic font-light w-[60px] text-center'>
                        20 oz
                      </th>
                      <th className='italic font-light w-[60px] text-center'>
                        16 oz
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {draught_type.draught_list.map((beer, index) => (
                      <tr key={index}>
                        <td>
                          <p className='text-left pr-12 text-[16px]'>
                            {beer.brand}
                          </p>
                        </td>
                        <td className='menu_price w-[60px] text-center'>
                          ${beer.price_20}
                        </td>
                        <td className='menu_price w-[60px] text-center'>
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
          className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[35px]`}
        >
          {menuHamiltonDrinksBeer.title}
        </h1>
        <h2
          className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[26px] text-left mt-4 mb-8`}
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
                          className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[24px] text-left mb-8`}
                        >
                          {bottle_cans_type.bottles_cans_type_title}
                        </th>
                        <th className='text-right pr-4 italic font-light'>
                          355 ml
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bottle_cans_type.bottles_cans_list.map((beer, index) => (
                        <tr key={index}>
                          <td>
                          <p className='text-left pr-12 text-[16px]'>
                              {beer.brand}
                            </p>
                          </td>
                          <td className='menu_price text-right pr-4'>${beer.price}</td>
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
