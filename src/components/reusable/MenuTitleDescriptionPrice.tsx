import { MenuTitleDescriptionPriceProps } from '@/src/util/types';
import { HeaderBold } from '@/src/util/fonts/fonts';

const MenuTitleDescriptionPrice = ({
  individual_menu_item_title,
  individual_menu_item_description,
  individual_menu_item_price_one,
  individual_menu_item_description_two,
}: MenuTitleDescriptionPriceProps) => {
  return (
    <div className='flex justify-between mb-4'>
      <div>
        <h3 className={`${HeaderBold.className}`}>{individual_menu_item_title}</h3>
        <p className='text-left pr-12 text-[#7d7d7d] text-[14px]'>
          {individual_menu_item_description}
        </p>
        {individual_menu_item_description_two && (
          <p className='text-left pr-12 font-semibold text-[12px]'>
            {individual_menu_item_description_two}
          </p>
        )}
      </div>
      {individual_menu_item_price_one && (
        <p className={`${HeaderBold.className} menu_price`}>{individual_menu_item_price_one}</p>
      )}
    </div>
  );
};

export default MenuTitleDescriptionPrice;
