import {
  GlacialIndifferenceBold,
  GlacialIndifferenceRegular,
} from '@/src/util/fonts/fonts';

const MenuTorontoBrunchDrinks = () => {
  const componentName = 'MENU_TORONTO_BRUNCH_DRINKS';
  const drinksArray = [
    {
      name: 'Espresso',
      price: '2.99',
    },
    {
      name: 'Long Espresso',
      price: '2.99',
    },
    {
      name: 'Americano',
      price: '3.99',
    },
    {
      name: 'Macchiato',
      price: '3.99',
    },
  ];

  const drinksArrayTwo = [
    {
      name: 'Cappuccino',
      price: '3.99',
    },
    {
      name: 'Hot Chocolate',
      price: '3.49',
    },
    {
      name: 'offee Lattte',
      price: '3.99',
    },
    {
      name: 'Mochaccino',
      price: '3.99',
    },
  ];
  return (
    <div className='mt-20'>
      <div className='relative flex items-center mx-[40px] mb-8'>
        <div className='flex-grow border-t border-gray-300 border-1'></div>
        <h1
          className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[35px] mx-4`}
        >
          Drinks
        </h1>
        <div className='flex-grow border-t border-gray-300 border-1'></div>
      </div>
      {drinksArray.map((item, index) => {
        return (
          <div className='flex justify-between mx-4 my-2' key={index}>
            <h3 className={`${GlacialIndifferenceBold.className}`}>
              {item.name}
            </h3>
            <p className={`${GlacialIndifferenceBold.className} menu_price`}>
              ${item.price}
            </p>
          </div>
        );
      })}
      <div className='mt-12'>
        {drinksArrayTwo.map((item, index) => {
          return (
            <div className='flex justify-between mx-4 my-2' key={index}>
              <h3 className={`${GlacialIndifferenceBold.className}`}>
                {item.name}
              </h3>
              <p className={`${GlacialIndifferenceBold.className} menu_price`}>
                ${item.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTorontoBrunchDrinks;
