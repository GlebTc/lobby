import { HeaderBold } from '@/src/util/fonts/fonts';

const MenuHamiltonLunchHours = () => {
  const componentName = 'MENU_HAMILTON_LUNCH_HOURS';
  return (
    <div>
      <p
        className={`${HeaderBold.className} text-center text-[#7d7d7d] md:text-[20px]`}
      >
        Tuesday - Saturday: 11am - 3pm
      </p>
    </div>
  );
};

export default MenuHamiltonLunchHours;
