import menuHamiltonDrinksCocktails from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksCoctails.json';

const MenuHamiltonDrinksCocktails = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_COCKTAILS';
  // console.log(menuHamiltonDrinksCocktails.cocktails);
  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4 flex flex-col gap-8 uppercase`}>
      <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
        {menuHamiltonDrinksCocktails.title}
      </h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3'>
        {menuHamiltonDrinksCocktails.cocktails.map((cocktail, index) => {
          return (
            <div
              key={index}
              className='flex justify-between p-4'
            >
              <div>
                <h2 className='uppercase font-bold'>{cocktail.name}</h2>
                <p className='text-gray-600 text-left pr-4'>
                  {cocktail.description}
                </p>
              </div>
              <p className='text-[#c69a50] pl-4 font-semibold'>
                ${cocktail.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuHamiltonDrinksCocktails;
