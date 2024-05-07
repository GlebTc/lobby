import React from 'react';

interface MenuItem {
  description: string;
  priceOptionOne: string;
  priceOptionTwo: string;
}

const MenuTwoOptions = ({
  componentName,
  subComponentName,
  menuTitle,
  menuOptionOne,
  menuOptionTwo,
  itemData,
}: {
  componentName: string;
  subComponentName: string;
  menuTitle: string;
  menuOptionOne: string;
  menuOptionTwo: string;
  itemData: MenuItem[];
}) => {
  return (
    <table
      className={`${componentName}_${subComponentName}_MAIN_CONTAINER w-full text-center`}
    >
      <thead>
        <tr>
          <th className='text-[#c69a50] font-[300] text-xl text-left w-[70%]'>
            {menuTitle}
          </th>
          <th>{menuOptionOne}</th>
          <th>{menuOptionTwo}</th>
        </tr>
      </thead>
      <tbody>
        {draught_type.draught_list.map((beer, index) => (
          <tr key={index}>
            <td>
              <h4 className='text-left'>{beer.brand}</h4>
            </td>
            <td className='menu_price'>${beer.price_20}</td>
            <td className='menu_price'>${beer.price_16}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MenuTwoOptions;
