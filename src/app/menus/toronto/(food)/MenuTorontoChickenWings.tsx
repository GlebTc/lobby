const MenuTorontoChickenWings = () => {
  const componentName = 'MENU_TORONTO_CHICKEN_WINGS';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col gap-8 pt-8`}>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        <div className='flex flex-col'>
          <h3>Chicken Wings</h3>
          <p className='text-left pr-12 text-[#7d7d7d] text-[14px]'>
            8 wings / $12.50 and 12 wings / $18.00
          </p>
        </div>
        <div className='flex flex-col'>
          <h3>BUFFALO WINGS</h3>
          <p className='text-left pr-12 text-[#7d7d7d] text-[14px]'>
            CHICKEN WINGS, BUFFALO SAUCE, SHAVED CARROTS, AND THINLY SLICE
            CELERY SERVE WITH CELTIC BLUE CHEESE.
          </p>
        </div>
        <div className='flex flex-col'>
          <h3>BBQ WINGS</h3>
          <p className='text-left pr-12 text-[#7d7d7d] text-[14px]'>
            CHICKEN WINGS, CLASSIC KANSAS BBQ SAUCE, PARSLEY SERVE WITH RANCH.
          </p>
        </div>

        <div className='flex flex-col'>
          <h3>HONEY GARLIC WINGS</h3>
          <p className='text-left pr-12 text-[#7d7d7d] text-[14px]'>
            CHICKEN WINGS, HONEY GARLIC AND SESAME SAUCE, CRISPY GARLIC, AND
            CHIVES SERVE WITH LIGHT AIOLI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuTorontoChickenWings;
