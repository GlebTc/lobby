import menuHamiltonDrinksBeer from '@/src/util/menu/hamilton/drinks/menuHamiltonSrinksBeer.json';

const MenuHamiltonDrinksBeer = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_BEER';

  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4 flex flex-col gap-8`}>
      <h1 className={`text-[#c69a50] font-[300] uppercase tracking-tight`}>
        {menuHamiltonDrinksBeer.title}
      </h1>
      <div className={`${componentName}_DRAUGHTS_HEADING_AND_LIST_CONTAINER flex-flex-col gap-4`}>
        <h2 className={`text-[#c69a50] font-[300] uppercase tracking-tight text-2xl text-center border-b-2`}>
          Draughts
        </h2>
        <div
          className={`${componentName}_DRAUGHTS_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-8`}
        >
          {menuHamiltonDrinksBeer.beers.draughts.map((draught_type, index) => {
            return (
              <div>
                <table
                  className={`${componentName}_DRAUGHTS_TABLE uppercase w-full`}
                >
                  <thead>
                    <tr className='text-left'>
                      <th className='text-[#c69a50] font-[300] text-xl text-left w-[70%]'>
                        {draught_type.draught_type_title}
                      </th>
                      <th>20oz</th>
                      <th>16oz</th>
                    </tr>
                  </thead>
                  <tbody>
                    {draught_type.draught_list.map((beer, index) => (
                      <tr key={index}>
                        <td>
                          <h4 className='uppercase'>{beer.brand}</h4>
                        </td>
                        <td>${beer.price_20}</td>
                        <td>${beer.price_16}</td>
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
        className={`${componentName}_BOTTLES_CANS_HEADING_AND_LIST_CONTAINER`}
      >
        <h2 className={`text-[#c69a50] font-[300] uppercase tracking-tight text-2xl text-center border-b-2`}>
          bottles/cans
        </h2>
        <div
          className={`${componentName}_BOTTLES_CANS_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-8`}
        >
          {menuHamiltonDrinksBeer.beers.bottles_cans.map(
            (bottle_cans_type, index) => {
              return (
                <div>
                  <table
                    className={`${componentName}_BOTTLES_CANS_TABLE uppercase w-full`}
                  >
                    <thead>
                      <tr className='text-left'>
                        <th className='text-[#c69a50] font-[300] text-xl text-left w-[70%]'>
                          {bottle_cans_type.bottles_cans_type_title}
                        </th>
                        <th className='text-center'>355ml</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bottle_cans_type.bottles_cans_list.map((beer, index) => (
                        <tr key={index}>
                          <td>
                            <h4 className='uppercase'>{beer.brand}</h4>
                          </td>
                          <td className='text-center'>${beer.price}</td>
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
