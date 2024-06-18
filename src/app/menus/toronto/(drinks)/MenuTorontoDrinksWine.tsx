import menuTorontoDrinksWine from '@/src/util/menu/toronto/drinks/menuTorontoDrinksWine.json';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuTorontoDrinksWine = () => {
  const componentName = 'MENU_TORONTO_DRINKS_WINE';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-2 pt-8`}>
      <div
        className={`${componentName}_WINE_LIST_CONTAINER grid md:grid-cols-2 gap-4 track`}
      >
        {menuTorontoDrinksWine.wines.map((item, index) => {
          return (
            <div key={index}>
              <table
                className={`${componentName}_WINE_TABLE w-full text-center`}
              >
                <thead>
                  <tr>
                    <th
                      className={`${HeaderRegular.className} text-[#c69a50] font-[300] text-2xl text-left w-[80%] tracking-widest`}
                    >
                      {item.wine_type_title}
                    </th>
                    <th
                      className={`${HeaderRegular.className} italic text-[14px] lowercase`}
                    >
                      6oz
                    </th>
                    <th
                      className={`${HeaderRegular.className} italic text-[14px] lowercase`}
                    >
                      bottle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {item.wine_list.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <h4 className='text-left'>{item.brand}</h4>
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

export default MenuTorontoDrinksWine;
