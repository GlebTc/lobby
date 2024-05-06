'use client';
import { useState } from 'react';
import MenuHamiltonDrinksMain from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksMain';
import MenuHamiltonFoodMain from '@/src/app/menus/hamilton/(food)/MenuHamiltonFoodMain';
import MenuHeader from '@/src/app/menus/MenuHeader';
import MenuHamiltonBrunchMain from '@/src/app/menus/hamilton/(brunch)/MenuHamiltonBrunchMain';
import MenuHamiltonBottlServiceMain from '@/src/app/menus/hamilton/(bottle_service)/MenuHamiltonBottlServiceMain';

const menusHamilton = () => {
  const componentName = 'MENUS_HAMILTON';

  const [category, setCategory] = useState<string>('drinks');

  return (
    <div className={`${componentName}_MAIN_CONTAINER max-w-7xl mx-auto uppercase`}>
      <MenuHeader
        category={category}
        setCategory={setCategory}
      />
      {category === 'drinks' && <MenuHamiltonDrinksMain />}
      {category === 'food' && <MenuHamiltonFoodMain />}
      {category === 'brunch' && <MenuHamiltonBrunchMain />}
      {category === 'bottle service' && <MenuHamiltonBottlServiceMain />}
    </div>
  );
};

export default menusHamilton;
