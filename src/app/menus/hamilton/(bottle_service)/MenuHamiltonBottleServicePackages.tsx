import menuHamiltonBottleServicePackages from '@/src/util/menu/hamilton/bottle_service/menuHamiltonBottleServicePackages.json';

const MenuHamiltonBottleServicePackages = () => {
  const componentName = 'MENU_HAMILTON_BOTTLE_SERVICE_PACKAGES';
  return (
    <div>
      <h2 className={`text-[#c69a50] tracking-tight border-b-2 my-4 pb-4`}>
        {menuHamiltonBottleServicePackages.title}
      </h2>
      <div className='grid md:grid-cols-2 gap-4 md:gap-8'>
        {menuHamiltonBottleServicePackages.packages.map((item, index) => {
          return (
            <div
              key={index}
              className={`${componentName}_PACKAGE_HEADING_AND_LIST_CONTAINER flex justify-between`}
            >
              <div>
                <h3>{item.name}</h3>
                <p className='text-gray-600 text-left'>
                  {item.description_one}
                </p>
                <p className='text-gray-600 text-left'>
                  {item.description_two}
                </p>
                <p className='text-gray-600 text-left'>
                  {item.description_three}
                </p>
                <p className='text-[10px] mt-2 tracking-wide text-gray-500 italic'>
                  {item.notes}
                </p>
              </div>
              <p className='text-[#c69a50] pl-4 font-semibold'>${item.price}</p>
            </div>
          );
        })}
      </div>
      <p className='text-center text-gray-400'>
        20% gratuity will be included for parties of 7 or larger
      </p>
    </div>
  );
};

export default MenuHamiltonBottleServicePackages;
