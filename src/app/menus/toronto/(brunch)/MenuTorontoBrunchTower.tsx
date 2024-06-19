import { HeaderRegular, HeaderBold } from '@/src/util/fonts/fonts';

const MenuTorontoBrunchTower = () => {
  const componentName = 'LOBBY_BRUNCH_TOWER_TORONTO';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col text-center mb-12`}
    >
      <div className={`${componentName}_BRUNCH_TOWER_CONTAINER`}>
        <div>
          <div className='md:flex justify-center items-center gap-4'>
          <h3 className={`${HeaderRegular.className}`}>Lobby Brunch tower</h3>
            <p className={`${HeaderBold.className} text-[#c69a50] font-bold min-w-[150px]`}>
              $180 | half $90
            </p>
          </div>
          <p className='text-center text-[#7d7d7d] text-[14px]'>
            CAN'T DECIDE WHAT TO HAVE?
          </p>
          <p className='text-center text-[#7d7d7d] text-[14px]'>
            {' '}
            HAVE IT ALL ON OUR SIGNATURE THREE TIER BRUNCH TOWER{' '}
          </p>
          <p className='text-center text-[#7d7d7d] text-[14px]'>{`{SERVES 2-4}`}</p>
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
          <h3 className={`${HeaderBold.className}`}>BOTTOM TIER</h3>
          <p className='text-center text-[#7d7d7d] text-[14px]'>
            CROQUETTES, SALMON & AVOCADO BAGELS, BLUEBERRY PANCAKES, FRITTATA,
            TURKEY SAUSAGE
          </p>
        </div>
        <div
          className={`${componentName}_TIER_TWO flex flex-col items-center w-full mt-2`}
        >
          <h3 className={`${HeaderBold.className}`}>MIDDLE TIER</h3>
          <p className='text-center text-[#7d7d7d] text-[14px]'>
            EGGS FLORENTINE, MINI CROISSANTS, HONEY & ORANGE LABNEH, GRANOLA
          </p>
        </div>
        <div
          className={`${componentName}_TIER_THREE flex flex-col items-center w-full mt-2`}
        >
          <h3 className={`${HeaderBold.className}`}>TOP TIER</h3>
          <p className='text-center text-[#7d7d7d] text-[14px]'>
            SEASONAL FRUITS, MINI CHERRY CHEESECAKE, CANNOLI WITH RICOTTA, HAZEL
            NUT, SAMBUCA & CHOCOLATE FILLINGS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuTorontoBrunchTower;
