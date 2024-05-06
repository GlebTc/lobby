// This Resusable Component is used in the following components:
// MenuHamiltonDrinksCocktails.tsx
// MenuHamiltonFoodAppetizers.tsx
// MenuHamiltonFoodDesserts.tsx
// MenuHamiltonFoodEntrees.tsx

import { MenuTitleDescriptionPriceProps } from '@/src/util/types';

const MenuTitleDescriptionPrice = ({
  individual_menu_item_title,
  individual_menu_item_description,
  individual_menu_item_price_one,
}: MenuTitleDescriptionPriceProps) => {
  return (
    <div className='flex justify-between'>
      <div>
        <h2 className='font-bold'>{individual_menu_item_title}</h2>
        <p className='text-gray-600 text-left'>
          {individual_menu_item_description}
        </p>
      </div>
      <p className='text-[#c69a50] pl-4 font-semibold'>
        ${individual_menu_item_price_one}
      </p>
    </div>
  );
};

export default MenuTitleDescriptionPrice;
