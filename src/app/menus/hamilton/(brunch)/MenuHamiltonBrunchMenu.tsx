import menuHamiltonBrunch from '@/src/util/menu/hamilton/brunch/menuHamiltonBrunch.json';
import { HeaderBold } from '@/src/util/fonts/fonts';

const MenuHamiltonBrunchMenu = () => {
  const componentName = 'MENU_HAMILTON_BRUNCH_MENU';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8`}>
      {menuHamiltonBrunch.brunch.map((item, index) => {
        return (
          <div key={index}>
            <div className='flex justify-center gap-2'>
              <h3 className={`${HeaderBold.className}`}>
                {item.name}
              </h3>
              <p className={`${HeaderBold.className} menu_price`}>
                ${item.price}
              </p>
            </div>
            <p className='text-[#7d7d7d] text-[14px] text-center'>
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MenuHamiltonBrunchMenu;
