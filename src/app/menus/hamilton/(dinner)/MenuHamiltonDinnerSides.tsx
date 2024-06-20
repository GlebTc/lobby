import menuHamiltonDinnerSides from '@/src/util/menu/hamilton/dinner/menuHamiltonDinnerSides.json';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonDinnerSides = () => {
  const componentName = 'MENU_HAMILTON_FOODS_ENTREES';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-2 pt-4`}>
      <h1
        className={`text-[#c69a50] ${HeaderRegular.className} font-[400] text-[35px]`}
      >
        {menuHamiltonDinnerSides.title}
      </h1>
      <div className='grid gap-4'>
        {menuHamiltonDinnerSides.sides.map((item, index) => {
          return (
            <div
              className='flex justify-between'
              key={index}
            >
              <p className='text-left pr-12 text-[#7d7d7d] text-[14px]'>
                {item.name}
              </p>

              <p className='menu_price'>${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuHamiltonDinnerSides;
