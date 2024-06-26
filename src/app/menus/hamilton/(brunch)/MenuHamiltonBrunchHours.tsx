import { HeaderBold } from '@/src/util/fonts/fonts';

const MenuHamiltonBrunchHours = () => {
  const componentName = 'MENU_HAMILTON_DINNER_HOURS';
  return (
    <div>
      <p
        className={`${HeaderBold.className} text-center text-[#7d7d7d] md:text-[20px]`}
      >
        Sunday: 10am - 3pm
      </p>
    </div>
  );
};

export default MenuHamiltonBrunchHours;
