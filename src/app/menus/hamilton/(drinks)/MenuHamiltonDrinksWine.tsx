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
        {menuHamiltonDrinksWine.wines.map((wine_type, index) => {
          return (
            <div key={index}>
              <table
                className={`${componentName}_WINE_TABLE w-full text-center`}
              >
                <thead>
                  <tr>
                    <th className='text-[#c69a50] font-[300] text-xl text-left w-[70%]'>
                      {wine_type.wine_type_title}
                    </th>
                    <th>6oz</th>
                    <th>bottle</th>
                  </tr>
                </thead>
                <tbody>
                  {wine_type.wine_list.map((wine, index) => (
                    <tr key={index}>
                      <td>
                        <h4 className='text-left'>{wine.brand}</h4>
                      </td>
                      {wine.price_6oz ? <td>${wine.price_6oz}</td> : <td></td>}
                      <td>${wine.price_bottle}</td>
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
