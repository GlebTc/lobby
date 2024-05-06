import menuHamiltonDrinksZeroProof from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksZeroProof.json';

const MenuHamiltonDrinksZeroProof = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_ZERO_PROOF';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
        {menuHamiltonDrinksZeroProof.title}
      </h1>
      <div
        className={`${componentName}_MOCKTAILS_HEADING_AND_LIST_CONTAINER flex-flex-col gap-4`}
      >
        <h2
          className={`text-[#c69a50] font-[300] tracking-tight text-2xl text-center border-b-2 mb-4 pb-4`}
        >
          mocktails
        </h2>
        <div
          className={`${componentName}_MOCKTAILS_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-8`}
        >
          {menuHamiltonDrinksZeroProof.zeros.mocktails.map(
            (mocktail, index) => {
              return (
                <div
                  key={index}
                  className='flex justify-between'
                >
                  <div>
                    <h2 className='font-bold'>{mocktail.brand}</h2>
                    <p className='text-gray-600 text-left'>
                      {mocktail.description}
                    </p>
                  </div>
                  <p className='text-[#c69a50] pl-4 font-semibold'>
                    ${mocktail.price}
                  </p>
                </div>
              );
            }
          )}
        </div>
        <h2
          className={`text-[#c69a50] font-[300] tracking-tight text-2xl text-center border-b-2 mb-4 py-4`}
        >
          non alcoholic
        </h2>
        <div
          className={`${componentName}_NON_ALCOHOLIC_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-8`}
        >
          {menuHamiltonDrinksZeroProof.zeros.non_alcoholic.map(
            (non_alcoholic, index) => {
              return (
                <div
                  key={index}
                  className='flex justify-between'
                >
                  <div>
                    <h2 className='font-bold'>{non_alcoholic.brand}</h2>
                  </div>
                  <p className='text-[#c69a50] pl-4 font-semibold'>
                    ${non_alcoholic.price}
                  </p>
                </div>
              );
            }
          )}
        </div>

        <h2
          className={`text-[#c69a50] font-[300] tracking-tight text-2xl text-center border-b-2 mb-4 py-4`}
        >
          coffee
        </h2>
        <div
          className={`${componentName}_COFFEE_LIST_CONTAINER grid sm:grid-cols-2 lg:grid-cols-3 gap-8`}
        >
          {menuHamiltonDrinksZeroProof.zeros.coffee.map((coffee, index) => {
            return (
              <div
                key={index}
                className='flex justify-between'
              >
                <div>
                  <h2 className='font-bold'>{coffee.brand}</h2>
                </div>
                <p className='text-[#c69a50] pl-4 font-semibold'>
                  ${coffee.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuHamiltonDrinksZeroProof;
