import menuHamiltonBottleServicePackages from '@/src/util/menu/hamilton/bottle_service/menuHamiltonBottleServicePackages.json';
import { HeaderRegular, HeaderBold } from '@/src/util/fonts/fonts';

const MenuHamiltonBottleServicePackages = () => {
  const componentName = 'MENU_HAMILTON_BOTTLE_SERVICE_PACKAGES';
  return (
    <div>
      <h1
        className={`text-[#c69a50] ${HeaderRegular.className} font-[400] text-[35px] mb-4`}
      >
        {menuHamiltonBottleServicePackages.title}
      </h1>
      <div className='grid md:grid-cols-2 gap-4 md:gap-8'>
        {menuHamiltonBottleServicePackages.packages.map((item, index) => {
          return (
            <div
              key={index}
              className={`${componentName}_PACKAGE_HEADING_AND_LIST_CONTAINER flex justify-between`}
            >
              <div>
              <h3 className={`${HeaderBold.className}`}>{item.name}</h3>
                <p className='text-[#7d7d7d] text-left text-[14px]'>
                  {item.description_one}
                </p>
                <p className='text-[#7d7d7d] text-left text-[14px]'>
                  {item.description_two}
                </p>
                <p className='text-[#7d7d7d] text-left text-[14px]'>
                  {item.description_three}
                </p>
                <p className='text-[11px] tracking-wide text-gray-500 italic normal-case'>
                  {item.notes}
                </p>
              </div>
              <p className={`${HeaderBold.className} text-[#c69a50] pl-4 font-semibold`}>${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuHamiltonBottleServicePackages;
