import menuHamiltonDrinksWine from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksWine.json';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonDrinksWine = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_WINE';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col pt-8`}>
      <h1
        className={`text-[#c69a50] ${HeaderRegular.className} font-[400] text-[35px] mb-8`}
      >
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
                      className={`text-[#c69a50] ${HeaderRegular.className} font-[400] text-[24px] text-left mb-8`}
                    >
                      {item.wine_type_title}
                    </th>
                    <th
                      className={`${HeaderRegular.className} italic text-[14px] lowercase w-[50px]`}
                    >
                      6oz
                    </th>
                    <th
                      className={`${HeaderRegular.className} italic text-[14px] lowercase w-[50px]`}
                    >
                      bottle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {item.wine_list.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <p className='text-left pr-12 text-[16px]'>
                          {item.brand}
                        </p>
                      </td>
                      {item.price_6oz ? <td>${item.price_6oz}</td> : <td></td>}
                      <td>${item.price_bottle}</td>
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
