import menuTorontoDrinksCocktails from '@/src/util/menu/toronto/drinks/menuTorontoDrinksCocktails.json';

const MenuTorontoDrinksCocktails = () => {
  const componentName = 'MENU_TORONTO_DRINKS_COCKTAILS';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
        {menuTorontoDrinksCocktails.title}
      </h1>
      <div className={`${componentName}_COCKTAILS_TYPES_MAIN_CONTAINER`}>
        {menuTorontoDrinksCocktails.cocktails.types.map((item, index) => {
          return (
            <>
              <h2
                className={`text-[#c69a50] font-[300] tracking-tight text-2xl text-center border-b-2 my-4 pb-4`}
              >
                {item.cocktail_type_title}
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
                {item.cocktail_list.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='flex justify-between'
                    >
                      <div>
                        <h3 className='font-bold'>{item.name}</h3>
                        <p className='text-gray-600 text-left'>
                          {item.description}
                        </p>
                      </div>
                      <p className='text-[#c69a50] pl-4 font-semibold'>
                        ${item.price}
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTorontoDrinksCocktails;
