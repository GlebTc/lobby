import React from 'react';

const MenuTorontoChickenWings = () => {
  const componentName = 'MENU_TORONTO_CHICKEN_WINGS';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <h2
        className={`text-[#c69a50] font-[300] tracking-tight text-2xl text-center border-b-2 my-4 pb-4`}
      >
        Chicken Wings (8 wings / $12.50 and 12 wings / $18.00)
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        <div className='flex flex-col'>
          <h3>BUFFALO WINGS</h3>
          <p className='text-left'>
            CHICKEN WINGS, BUFFALO SAUCE, SHAVED CARROTS, AND THINLY SLICE
            CELERY SERVE WITH CELTIC BLUE CHEESE.
          </p>
        </div>

        <div className='flex flex-col'>
          <h3>BBQ WINGS</h3>
          <p className='text-left'>
            CHICKEN WINGS, CLASSIC KANSAS BBQ SAUCE, PARSLEY SERVE WITH RANCH.
          </p>
        </div>

        <div className='flex flex-col'>
          <h3>HONEY GARLIC WINGS</h3>
          <p className='text-left'>
            CHICKEN WINGS, HONEY GARLIC AND SESAME SAUCE, CRISPY GARLIC, AND
            CHIVES SERVE WITH LIGHT AIOLI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuTorontoChickenWings;
