import { HeaderBold } from '@/src/util/fonts/fonts';

const MenuHamiltonDinnerHours = () => {
  const componentName = 'MENU_HAMILTON_DINNER_HOURS';
  return (
    <div>
      <p className={`${HeaderBold.className} text-center text-[#7d7d7d] md:text-[20px]`}>
        Tuesday - Sunday:
        5pm - 11pm
      </p>
    </div>
  );
};

export default MenuHamiltonDinnerHours;
