import { MenuTitleDescriptionPriceProps } from '@/src/util/types';

const MenuTitleDescriptionPrice = ({
  individual_menu_item_title,
  individual_menu_item_description,
  individual_menu_item_price_one,
}: MenuTitleDescriptionPriceProps) => {
  return (
    <div className='flex justify-between'>
      <div>
        <h3>{individual_menu_item_title}</h3>
        <p className='text-left pr-12'>
          {individual_menu_item_description}
        </p>
      </div>
      <p className='menu_price'>
        ${individual_menu_item_price_one}
      </p>
    </div>
  );
};

export default MenuTitleDescriptionPrice;
