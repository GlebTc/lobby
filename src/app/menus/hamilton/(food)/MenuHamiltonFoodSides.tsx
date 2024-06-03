import menuHamiltonFoodSides from '@/src/util/menu/hamilton/food/menuHamiltonFoodSides.json';
import { GlacialIndifferenceRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonFoodSides = () => {
  const componentName = 'MENU_HAMILTON_FOODS_ENTREES';

  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-2 pt-8`}>
      <h1
        className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[35px]`}
      >
        {menuHamiltonFoodSides.title}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8'>
        {menuHamiltonFoodSides.sides.map((item, index) => {
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

export default MenuHamiltonFoodSides;
