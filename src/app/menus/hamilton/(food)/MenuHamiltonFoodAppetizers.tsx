import menuHamiltonFoodAppetizers from '@/src/util/menu/hamilton/food/menuHamiltonFoodAppetizers.json';

const MenuHamiltonFoodAppetizers = () => {
  const componentName = 'MENU_HAMILTON_FOODS_APPETIZERS';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
        {menuHamiltonFoodAppetizers.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        {menuHamiltonFoodAppetizers.appetizers.map((appetizer, index) => {
          return (
            <div
              key={index}
              className='flex justify-between'
            >
              <div>
                <h2 className='font-bold'>{appetizer.name}</h2>
                <p className='text-gray-600 text-left'>
                  {appetizer.description}
                </p>
              </div>
              <p className='text-[#c69a50] pl-4 font-semibold'>
                {appetizer.price && `$${appetizer.price}`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuHamiltonFoodAppetizers;
