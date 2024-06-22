import menuHamiltonDrinksWine from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksWine.json';
import { HeaderRegular, FuturaBoldCondesedBT } from '@/src/util/fonts/fonts';

const MenuHamiltonDrinksWine = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_WINE';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col pt-8`}>
      <h1 className={`text-[#c69a50] ${HeaderRegular.className} mb-8`}>
        {menuHamiltonDrinksWine.title}
      </h1>
      <div
        className={`${componentName}_WINE_LIST_CONTAINER grid md:grid-cols-2 gap-8`}
      >
        {menuHamiltonDrinksWine.wines.map((item, index) => {
          return (
            <div key={index}>
              <table
                className={`${componentName}_WINE_TABLE w-full text-center`}
              >
                <thead>
                  <tr>
                    <th
                      className={`text-[#c69a50] ${HeaderRegular.className} font-[400] text-[22px] text-left w-[90%]`}
                    >
                      {item.wine_type_title}
                    </th>
                    <th
                      className={`${HeaderRegular.className} italic text-[15px] lowercase font-[300] text-left pr-4`}
                    >
                      6oz
                    </th>
                    <th
                      className={`${HeaderRegular.className} italic text-[15px] lowercase font-[300] text-left pr-4`}
                    >
                      bottle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {item.wine_list.map((item, index) => (
                    <tr key={index}>
                      <td>
                      <p className='text-left w-[80%] text-[15px]'>
                          {item.brand}
                        </p>
                      </td>
                      {item.price_6oz ? (
                        <td
                          className={`${FuturaBoldCondesedBT.className} w-[60px] text-left pr-4`}
                        >
                          ${item.price_6oz}
                        </td>
                      ) : (
                        <td></td>
                      )}
                      <td
                        className={`${FuturaBoldCondesedBT.className} w-[60px] text-left pr-4`}
                      >
                        ${item.price_bottle}
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
  );
};

export default MenuHamiltonDrinksWine;
