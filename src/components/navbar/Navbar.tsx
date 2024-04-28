import NavDesktop from './desktop/NavDesktop';
import NavMobile from './mobile/NavMobile';
const Navbar = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <NavDesktop />
      </div>
      <div className='md:hidden'>
        <NavMobile />
      </div>
    </div>
  );
};

export default Navbar;
