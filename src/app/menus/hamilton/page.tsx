'use client';
import { useState } from 'react';
import MenuHamiltonDrinksMain from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksMain';
import MenuHamiltonFoodMain from '@/src/app/menus/hamilton/(food)/MenuHamiltonFoodMain';
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
      {category === 'food' && <MenuHamiltonFoodMain />}
    </div>
  );
};

export default menusHamilton;
