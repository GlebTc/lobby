import menuHamiltonDrinksCocktails from '@/src/util/menu/hamilton/drinks/menuHamiltonDrinksCoctails.json';

const MenuHamiltonDrinksCocktails = () => {
  const componentName = 'MENU_HAMILTON_DRINKS_COCKTAILS';
  // console.log(menuHamiltonDrinksCocktails.cocktails);
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
        {menuHamiltonDrinksCocktails.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        {menuHamiltonDrinksCocktails.cocktails.map((cocktail, index) => {
          return (
            <div
              key={index}
              className='flex justify-between'
            >
              <div>
                <h2 className='font-bold'>{cocktail.name}</h2>
                <p className='text-gray-600 text-left'>
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
