import { HeaderRegular } from '@/src/util/fonts/fonts';

const MenuTitlePrice = ({
  individual_menu_item_title,
  individual_menu_item_price_one,
}: {individual_menu_item_title: string, individual_menu_item_price_one: string}) => {
  return (
    <div className='flex justify-between'>
      <h3 className={`${HeaderRegular.className}`}>{individual_menu_item_title}</h3>

      <p className='menu_price'>
        ${individual_menu_item_price_one}
      </p>
    </div>
  );
};

export default MenuTitlePrice;
