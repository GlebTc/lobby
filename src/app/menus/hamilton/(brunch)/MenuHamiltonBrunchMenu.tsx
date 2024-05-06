import menuHamiltonBrunch from '@/src/util/menu/hamilton/brunch/menuHamiltonBrunch.json';

const MenuHamiltonBrunchMenu = () => {
  const componentName = 'MENU_HAMILTON_BRUNCH_MENU';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8`}>
      {menuHamiltonBrunch.brunch.map((item, index) => {
        return (
          <div
            key={index}
            className='flex justify-between'
          >
            <div>
              <h2 className='font-bold'>{item.name}</h2>
              <p className='text-gray-600 text-left'>{item.description}</p>
            </div>
            <p className='text-[#c69a50] pl-4 font-semibold'>${item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MenuHamiltonBrunchMenu;
