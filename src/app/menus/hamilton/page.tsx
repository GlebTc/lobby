'use client';
import { useState } from 'react';
import MenuHamiltonDrinksMain from './(drinks)/MenuHamiltonDrinksMain';
import HamiltonMenuHeader from './HamiltonMenuHeader';

const menusHamilton = () => {
  const componentName = 'MENUS_HAMILTON';

  const [category, setCategory] = useState<string>('drinks');

  return (
    <div className='max-w-7xl mx-auto'>
      <HamiltonMenuHeader
        category={category}
        setCategory={setCategory}
      />
      {category === 'drinks' && <MenuHamiltonDrinksMain />}
    </div>
  );
};

export default menusHamilton;
