'use client';
import { useState } from 'react';
import MenuTorontoDrinksMain from '@/src/app/menus/toronto/(drinks)/MenuTorontoDrinksMain';

import MenuHeader from '@/src/app/menus/MenuHeader';

const menusHamilton = () => {
  const componentName = 'MENUS_TORONTO';

  const [category, setCategory] = useState<string>('drinks');

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER max-w-7xl mx-auto uppercase`}
    >
      <MenuHeader
        category={category}
        setCategory={setCategory}
      />
      {category === 'drinks' && <MenuTorontoDrinksMain />}
      {/* {category === 'food' && <MenuHamiltonFoodMain />}
      {category === 'brunch' && <MenuHamiltonBrunchMain />}
      {category === 'bottle service' && <MenuHamiltonBottlServiceMain />} */}
    </div>
  );
};

export default menusHamilton;
