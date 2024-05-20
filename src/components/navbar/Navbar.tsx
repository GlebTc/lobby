'use client';
import { useState, useEffect } from 'react';
import NavDesktop from './desktop/NavDesktop';
import NavMobile from './mobile/NavMobile';

const Navbar = () => {
  const [navShadow, setNavShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-white ${navShadow ? 'shadow-md shadow-gray-600' : ''}`}>
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
