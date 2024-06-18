import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuHamiltonHappyHourHappyDays = () => {
  const componentName = 'MENU_HAMILTON_HAPPY_HOUR_HAPPY_DAYS';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col pt-8`}>
      <h1
        className={`text-[#c69a50] ${HeaderRegular.className} font-[400] text-[35px] my-2`}
      >
        Happy Days
      </h1>
      <div
        className={`${componentName}_DAYS_OF_THE_WEEK_CONTAINER flex flex-col gap-8`}
      >
        <div
          className={`${componentName}_TUESDAY flex flex-col items-center w-full`}
        >
          <h3 className={`${HeaderRegular.className} tracking-wider`}>
            Tuesday
          </h3>
          <p className='text-center text-[#c69a50] text-[14px]'>buck-a-shuck</p>
          <p>3pm - CLOSE</p>
        </div>

        <div
          className={`${componentName}_WEDNESDAY flex flex-col items-center w-full`}
        >
          <h3 className={`${HeaderRegular.className} tracking-wider`}>
            Wednesday
          </h3>
          <p className='text-center text-[#c69a50] text-[14px]'>
            $5 mix drinks
          </p>
          <p>3-6pm & 9pm-CLOSE</p>
        </div>

        <div
          className={`${componentName}_THURSDAY flex flex-col items-center w-full`}
        >
          <h3 className={`${HeaderRegular.className} tracking-wider`}>
            Thursday
          </h3>
          <p className='text-center text-[#c69a50] text-[14px]'>
            Half off wine (bottles only)
          </p>
          <p>3pm - CLOSE</p>
        </div>

        <div
          className={`${componentName}_FRIDAY_&_SATURDAY flex flex-col items-center w-full`}
        >
          <h3 className={`${HeaderRegular.className} tracking-wider`}>
            Friday & Saturday
          </h3>
          <p className='text-center text-[#c69a50] text-[14px]'>
            Late night entertainment
          </p>
        </div>

        <div
          className={`${componentName}_TIER_ONE flex flex-col items-center w-full`}
        >
          <h3 className={`${HeaderRegular.className} tracking-wider`}>
            Sunday
          </h3>
          <p className='text-center text-[#c69a50] text-[14px]'>
            $35 bottomless mimosas
          </p>
          <p>10am - 3pm</p>
        </div>
      </div>
    </div>
  );
};

export default MenuHamiltonHappyHourHappyDays;
