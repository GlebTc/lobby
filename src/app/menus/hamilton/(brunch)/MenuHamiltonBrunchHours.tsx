import { HeaderBold } from '@/src/util/fonts/fonts';

const MenuHamiltonBrunchHours = () => {
  const componentName = 'MENU_HAMILTON_DINNER_HOURS';
  return (
    <div className='flex w-full justify-center gap-8'>
      <p
        className={`${HeaderBold.className} text-center text-[#7d7d7d] text-[20px]`}
      >
        Sunday:
      </p>
      <p
        className={`${HeaderBold.className} text-center text-[#7d7d7d] text-[20px]`}
      >
        10am - 3pm
      </p>
    </div>
  );
};

export default MenuHamiltonBrunchHours;
