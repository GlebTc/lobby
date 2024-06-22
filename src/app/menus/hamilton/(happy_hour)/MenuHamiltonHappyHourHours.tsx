import { HeaderBold } from '@/src/util/fonts/fonts';

const MenuHamiltonHappyHourHours = () => {
  const componentName = 'MENU_HAMILTON_HAPPY_HOUR_HOURS';
  return (
    <div>
      <div className='flex w-full justify-center gap-8'>
        <p
          className={`${HeaderBold.className} text-center text-[#7d7d7d] text-[20px]`}
        >
          Everyday:
        </p>
        <p
          className={`${HeaderBold.className} text-center text-[#7d7d7d] text-[20px]`}
        >
          3pm - 6pm
        </p>
      </div>
      <div className='flex w-full justify-center gap-8'>
        <p
          className={`${HeaderBold.className} text-center text-[#7d7d7d] text-[20px]`}
        >
          Tuesday - Thursday & Sunday:
        </p>
        <p
          className={`${HeaderBold.className} text-center text-[#7d7d7d] text-[20px]`}
        >
          9pm - close
        </p>
      </div>
    </div>
  );
};

export default MenuHamiltonHappyHourHours;
