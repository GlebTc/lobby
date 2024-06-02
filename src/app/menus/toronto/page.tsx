'use client';
import { useState } from 'react';
import MenuTorontoDrinksMain from '@/src/app/menus/toronto/(drinks)/MenuTorontoDrinksMain';
import MenuTorontoFoodMain from '@/src/app/menus/toronto/(food)/MenuTorontoFoodMain';
import MenuHeaderToronto from './MenuHeaderToronto';
import MenuTorontoBrunchMain from './(brunch)/MenuTorontoBrunchMain';
import MenuTorontoBottlServiceMain from './(bottle_service)/MenuTorontoBottleServiceMain';

const menusHamilton = () => {
  const componentName = 'MENUS_TORONTO';

  const [category, setCategory] = useState<string>('drinks');

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER max-w-7xl mx-auto uppercase`}
    >
      <MenuHeaderToronto
        category={category}
        setCategory={setCategory}
      />
      {category === 'drinks' && <MenuTorontoDrinksMain />}
      {category === 'food' && <MenuTorontoFoodMain />}
      {category === 'brunch' && <MenuTorontoBrunchMain />}
      {category === 'bottle service' && <MenuTorontoBottlServiceMain />}
    </div>
  );
};

export default menusHamilton;
