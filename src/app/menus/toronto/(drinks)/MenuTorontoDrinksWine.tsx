import menuTorontoDrinksWine from '@/src/util/menu/toronto/drinks/menuTorontoDrinksWine.json';

const MenuTorontoDrinksWine = () => {
    const componentName = 'MENU_TORONTO_DRINKS_WINE';
    return (
      <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
        <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
          {menuTorontoDrinksWine.title}
        </h1>
        <div
          className={`${componentName}_WINE_LIST_CONTAINER grid md:grid-cols-2 gap-8`}
        >
          {menuTorontoDrinksWine.wines.map((item, index) => {
            return (
              <div key={index}>
                <table
                  className={`${componentName}_WINE_TABLE w-full text-center`}
                >
                  <thead>
                    <tr>
                      <th className='text-[#c69a50] font-[300] text-xl text-left w-[70%]'>
                        {item.wine_type_title}
                      </th>
                      <th>6oz</th>
                      <th>bottle</th>
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
}

export default MenuTorontoDrinksWine