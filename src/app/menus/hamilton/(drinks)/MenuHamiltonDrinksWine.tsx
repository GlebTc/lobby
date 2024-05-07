import menuHamiltonDrinksWine from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksWine.json';

const MenuHamiltonDrinksWine = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_WINE';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
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
                        <p className='text-left'>{item.brand}</p>
                      </td>
                      {item.price_6oz ? <td className='menu_price'>${item.price_6oz}</td> : <td></td>}
                      <td className='menu_price'>${item.price_bottle}</td>
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
