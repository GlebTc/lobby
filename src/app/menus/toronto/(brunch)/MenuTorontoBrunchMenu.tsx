import menuTorontoBrunch from '@/src/util/menu/toronto/brunch/menuTorontoBrunch.json';
import { GlacialIndifferenceBold } from '@/src/util/fonts/fonts';

const MenuTorontoBrunchMenu = () => {
  const componentName = 'MENU_HAMILTON_BRUNCH_MENU';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8`}>
      {menuTorontoBrunch.brunch.map((item, index) => {
        return (
          <div key={index}>
            <div className='flex justify-center gap-2'>
              <h3 className={`${GlacialIndifferenceBold.className}`}>
                {item.name}
              </h3>
              <p className={`${GlacialIndifferenceBold.className} menu_price`}>
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

export default MenuTorontoBrunchMenu;
