import menuTorontoBottleServicePackages from '@/src/util/menu/toronto/bottle_service/menuTorontoBottleServicePackages.json';
import localFont from 'next/font/local';

const GlacialIndifferenceRegular = localFont({
  src: '../../../../../public/fonts/static-fonts/GlacialIndifference-Regular.otf',
  display: 'swap',
})

const GlacialIndifferenceBold = localFont({
  src: '../../../../../public/fonts/static-fonts/GlacialIndifference-Bold.otf',
  display: 'swap',
})

const MenuTorontoBottleServicePackages = () => {
  const componentName = 'MENU_TORONTO_BOTTLE_SERVICE_PACKAGES';
  return (
    <div>
      <h1
        className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[35px] mb-4`}
      >
        {menuTorontoBottleServicePackages.title}
      </h1>
      <div className='grid md:grid-cols-2 gap-4 md:gap-8'>
        {menuTorontoBottleServicePackages.packages.map((item, index) => {
          return (
            <div
              key={index}
              className={`${componentName}_PACKAGE_HEADING_AND_LIST_CONTAINER flex justify-between`}
            >
              <div>
                <h3 className={`${GlacialIndifferenceBold.className}`}>{item.name}</h3>
                <p className='text-[#7d7d7d] text-left text-[14px]'>
                  {item.description_one}
                </p>
                <p className='text-[#7d7d7d] text-left text-[14px]'>
                  {item.description_two}
                </p>
                <p className='text-[#7d7d7d] text-left text-[14px]'>
                  {item.description_three}
                </p>
                {item.description_four && (
                  <p className='text-[#7d7d7d] text-left text-[14px]'>
                    {item.description_four}
                  </p>
                )}
                <p className='text-[11.2px] tracking-wide text-gray-500 italic normal-case'>
                  {item.notes}
                </p>
              </div>
              <p className='text-[#c69a50] pl-4 font-semibold'>${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTorontoBottleServicePackages;
