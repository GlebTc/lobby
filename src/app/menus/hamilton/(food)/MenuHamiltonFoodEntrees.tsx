import menuHamiltonFoodEntrees from '@/src/util/menu/hamilton/food/menuHamiltonFoodEntrees.json';

const MenuHamiltonFoodEntrees = () => {
  const componentName = 'MENU_HAMILTON_FOODS_ENTREES';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h1 className={`text-[#c69a50] font-[300] tracking-tight`}>
        {menuHamiltonFoodEntrees.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        {menuHamiltonFoodEntrees.entrees.map((item, index) => {
          return (
            <div
              key={index}
              className='flex justify-between'
            >
              <div>
                <h2 className='font-bold'>{item.name}</h2>
                <p className='text-gray-600 text-left'>
                  {item.description}
                </p>
              </div>
              <p className='text-[#c69a50] pl-4 font-semibold'>
                {item.price && `$${item.price}`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuHamiltonFoodEntrees;
