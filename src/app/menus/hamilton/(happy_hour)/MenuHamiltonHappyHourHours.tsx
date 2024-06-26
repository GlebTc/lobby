import { HeaderBold } from '@/src/util/fonts/fonts';

const MenuHamiltonHappyHourHours = () => {
  const componentName = 'MENU_HAMILTON_HAPPY_HOUR_HOURS';
  return (
    <div>
      <p
        className={`${HeaderBold.className} text-center text-[#7d7d7d] md:text-[20px]`}
      >
        Everyday: 3pm - 6pm
      </p>

      <p
        className={`${HeaderBold.className} text-center text-[#7d7d7d] md:text-[20px]`}
      >
        Tuesday - Thursday & Sunday: 9pm - close
      </p>
    </div>
  );
};

export default MenuHamiltonHappyHourHours;
