const MenuTorontoBrunchTower = () => {
  const componentName = 'LOBBY_BRUNCH_TOWER_TORONTO';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col text-center mb-12`}
    >
      <div className={`${componentName}_BRUNCH_TOWER_CONTAINER`}>
        <div>
          <div className='flex justify-center gap-2 items-center'>
            <h3>Lobby Brunch tower</h3>
            <p className='text-[#c69a50] font-bold min-w-[150px]'>
              $180 | half $90
            </p>
          </div>
          <p>CAN'T DECIDE WHAT TO HAVE?</p>
          <p> HAVE IT ALL ON OUR SIGNATURE THREE TIER BRUNCH TOWER </p>
          <p>{`{SERVES 2-4}`}</p>
        </div>
      </div>
      <div
        className={`${componentName}_VERTICAL_LINE_CONTAINER h-[150px] flex justify-center my-4`}
      >
        <div className='h-[100%] border-[1px] border-gray-400 w-[1px]'></div>
      </div>
      <div className={`${componentName}_TIER_OPTIONS`}>
        <div
          className={`${componentName}_TIER_ONE flex flex-col items-center w-full`}
        >
          <h3 className='font-bold'>BOTTOM TIER</h3>
          <p>CROQUETTES, SALMON & AVOCADO BAGELS, BLUEBERRY PANCAKES, FRITTATA, TURKEY SAUSAGE</p>
        </div>
        <div
          className={`${componentName}_TIER_TWO flex flex-col items-center w-full`}
        >
          <h3 className='font-bold'>MIDDLE TIER</h3>
          <p>
          EGGS FLORENTINE, MINI CROISSANTS, HONEY & ORANGE LABNEH, GRANOLA
          </p>
        </div>
        <div
          className={`${componentName}_TIER_THREE flex flex-col items-center w-full`}
        >
          <h3 className='font-bold'>TOP TIER</h3>
          <p>SEASONAL FRUITS, MINI CHERRY CHEESECAKE, CANNOLI WITH RICOTTA, HAZEL NUT, SAMBUCA & CHOCOLATE FILLINGS.</p>
        </div>
      </div>
    </div>
  );
};

export default MenuTorontoBrunchTower;
