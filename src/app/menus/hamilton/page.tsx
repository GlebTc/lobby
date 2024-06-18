'use client';
import { useState } from 'react';
import MenuHamiltonDrinksMain from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksMain';
import MenuHamiltonFoodMain from '@/src/app/menus/hamilton/(food)/MenuHamiltonFoodMain';
import MenuHeaderHamilton from './MenuHeaderHamilton';
import MenuHamiltonBrunchMain from '@/src/app/menus/hamilton/(brunch)/MenuHamiltonBrunchMain';
import MenuHamiltonBottlServiceMain from '@/src/app/menus/hamilton/(bottle_service)/MenuHamiltonBottlServiceMain';
import MenuHamiltonLunchMain from '@/src/app/menus/hamilton/(lunch)/MenuHamiltonLunchMain'

const menusHamilton = () => {
  const componentName = 'MENUS_HAMILTON';

  const [category, setCategory] = useState<string>('drinks');

  return (
    <div className={`${componentName}_MAIN_CONTAINER max-w-7xl mx-auto uppercase`}>
      <MenuHeaderHamilton
        category={category}
        setCategory={setCategory}
      />
      {category === 'drinks' && <MenuHamiltonDrinksMain />}
      {category === 'dinner' && <MenuHamiltonFoodMain />}
      {category === 'sunday brunch' && <MenuHamiltonBrunchMain />}
      {category === 'bottle service' && <MenuHamiltonBottlServiceMain />}
      {category === 'lunch' && <MenuHamiltonLunchMain />}
    </div>
  );
};

export default menusHamilton;
