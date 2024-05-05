'use client';
import { useState } from 'react';
import MenuHamiltonDrinksCocktails from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksCocktails';
import MenuHamiltonDrinksBeer from '@/src/app/menus/hamilton/(drinks)/MenuHamiltonDrinksBeer';

const menusHamilton = () => {
  const componentName = 'MENUS_HAMILTON';
  const categories = ['drinks', 'food', 'brunch', 'bottle service'];
  const [category, setCategory] = useState<string>('drinks');
  return (
    <div>
      <MenuHamiltonDrinksCocktails />
      <MenuHamiltonDrinksBeer />
    </div>
  );
};

export default menusHamilton;
