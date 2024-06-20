'use client';
import { useState } from 'react';
import MenuHamiltonDrinksMain from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksMain';
import MenuHamiltonDinnerMain from '@/src/app/menus/hamilton/(dinner)/MenuHamiltonDinnerMain';
import MenuHeaderHamilton from './MenuHeaderHamilton';
import MenuHamiltonBrunchMain from '@/src/app/menus/hamilton/(brunch)/MenuHamiltonBrunchMain';
import MenuHamiltonBottlServiceMain from '@/src/app/menus/hamilton/(bottle_service)/MenuHamiltonBottlServiceMain';
import MenuHamiltonLunchMain from '@/src/app/menus/hamilton/(lunch)/MenuHamiltonLunchMain';
import MenuHamiltonHappyHourMain from '@/src/app/menus/hamilton/(happy_hour)/MenuHamiltonHappyHourMain';

const menusHamilton = () => {
  const componentName = 'MENUS_HAMILTON';

  const [category, setCategory] = useState<string>('drinks');

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER max-w-[var(--max-width)] mx-auto uppercase`}
    >
      <MenuHeaderHamilton
        category={category}
        setCategory={setCategory}
      />
      {category === 'drinks' && <MenuHamiltonDrinksMain />}
      {category === 'dinner' && <MenuHamiltonDinnerMain />}
      {category === 'happy hour' && <MenuHamiltonHappyHourMain />}
      {category === 'sunday brunch' && <MenuHamiltonBrunchMain />}
      {category === 'bottle service' && <MenuHamiltonBottlServiceMain />}
      {category === 'lunch' && <MenuHamiltonLunchMain />}
    </div>
  );
};

export default menusHamilton;
