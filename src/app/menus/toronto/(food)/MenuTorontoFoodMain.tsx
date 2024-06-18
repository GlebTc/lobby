import MenuTorontoFoodShare from '@/src/app/menus/toronto/(food)/MenuTorontoFoodShare';
import MenuTorontoChickenWings from './MenuTorontoChickenWings';
import MenuTorontoRolls from './MenuTorontoRolls';
import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuTorontoFoodMain = () => {
  const componentName = 'MENU_TORONTO_FOOD_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER p-4`}>
      <MenuTorontoFoodShare />
      <MenuTorontoChickenWings />
      <MenuTorontoRolls />
      <div>
        <h1
          className={`text-[#c69a50] ${HeaderRegular.className} font-[400] tracking-tight text-[35px] mt-8 mb-4`}
        >
          DESSERTS
        </h1>
        <div className='flex justify-between mb-4'>
          <div>
          <h3 className={`${HeaderRegular.className}`}>Chocolate Cake</h3>
            <p className='text-left pr-12 text-[#7d7d7d] text-[14px]'>
              CHOCOLATE CAKE, VANILLA CHANTILLY CREAM, CANDIED NUTS, BERRY JAM,
              BARQUILLO
            </p>
          </div>

          <p className='menu_price'>$15</p>
        </div>
      </div>
    </div>
  );
};

export default MenuTorontoFoodMain;
