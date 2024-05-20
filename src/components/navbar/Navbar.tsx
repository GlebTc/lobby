'use client';
import { useState } from 'react';
import NavDesktop from './desktop/NavDesktop';
import NavMobile from './mobile/NavMobile';
const Navbar = () => {
  const [navShadow, setNavShadow] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 51) {
      setNavShadow(true);
    } else {
      setNavShadow(false);
    }
  });
  return (
    <div className={`${navShadow ? 'shadow-md shadow-gray-600' : ''}`}>
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
