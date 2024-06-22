import { HeaderBold } from '@/src/util/fonts/fonts';

const MenuHamiltonLunchHours = () => {
  const componentName = 'MENU_HAMILTON_LUNCH_HOURS';
  return (
    <div className='flex w-full justify-center gap-8'>
      <p
        className={`${HeaderBold.className} text-center text-[#7d7d7d] text-[20px]`}
      >
        Tuesday - Saturday:
      </p>
      <p
        className={`${HeaderBold.className} text-center text-[#7d7d7d] text-[20px]`}
      >
        11am - 3pm
      </p>
    </div>
  );
};

export default MenuHamiltonLunchHours;
