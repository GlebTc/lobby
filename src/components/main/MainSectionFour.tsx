'use client';
import { useLocationPickerStore } from '@/src/util/stores/LocationPickerStore';
import Image from 'next/image';
import main_section_four_img from '@/public/assets/main_section_four_img.webp';
import main_section_four_img_two from '@/public/assets/main_section_four_img_two.webp';
import { HeaderBold } from '@/src/util/fonts/fonts';

const MainSectionFour = () => {
  const componentName = 'MAIN_SECTION_FOUR';
  const { showLocationPicker, setShowLocationPicker, setSelectedMenuItem } =
    useLocationPickerStore();

  const handleButtonClick = () => {
    setSelectedMenuItem('menus');
    setShowLocationPicker(showLocationPicker);
  };

  const handleButtonClickReserveNow = () => {
    setSelectedMenuItem('reservations');
    setShowLocationPicker(showLocationPicker);
  };

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-fit grid md:grid-cols-2 md:py-8 md:px-4 bg-white`}
    >
      <div
        className={`${componentName}_EXPLORE_MENU_ONE_CONTAINER p-4 flex flex-col justify-start items-center gap-4`}
      >
        <div className='relative h-[90dvh] w-[90dvw] md:w-[40dvw]'>
          <Image
            src={main_section_four_img}
            alt='Lobby Bar Restaurant | Main Page | Section Four | Indulge in Weekend Bliss Image'
            title='Lobby Bar Restaurant | Main Page | Section Four | Indulge in Weekend Bliss Image'
            fill
            sizes='(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 35vw'
            className='object-cover'
            quality={80} // Adjusted quality to 80
          />
        </div>
        <div
          className={`${componentName}_HEADINGS_CONTAINER text-3xl font-[700] flex flex-col items-center text-center`}
        >
          <h2 className={`${HeaderBold.className} text-[30px]`}>
            For The Wine Lovers
          </h2>
        </div>
        <p className='text-center px-8 md:px-12'>
          Enjoy 1/2 price bottles of wine on Thursdays.{' '}
          <span className='italic'>Hours vary by location.</span>
        </p>
        <div
          className={`${componentName}_RESERVE_NOW_BUTTON main_button mt-2`}
          aria-label='Lobby Bar Restaurant | Main Page | Section One | Reserve Now Button'
          title='Lobby Bar Restaurant | Main Page | Section One | Reserve Now Button'
          onClick={handleButtonClickReserveNow}
        >
          Reserve Now
        </div>
      </div>
      <div
        className={`${componentName}_EXPLORE_MENU_TWO_CONTAINER p-4 flex flex-col justify-center items-center gap-4`}
      >
        <div className='relative h-[90dvh] w-[90dvw] md:w-[40dvw]'>
          <Image
            src={main_section_four_img_two}
            alt='Lobby Bar Restaurant | Main Page | Section Four | Elegance Meets Experience Image'
            title='Lobby Bar Restaurant | Main Page | Section Four | Elegance Meets Experience Image'
            fill
            sizes='(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 35vw'
            className='object-cover'
            quality={80} // Adjusted quality to 80
          />
        </div>
        <div
          className={`${componentName}_HEADINGS_CONTAINER text-3xl font-[700] flex flex-col items-center text-center`}
        >
          <h2 className={`${HeaderBold.className} text-[30px]`}>
            Happy Hour & Late Night Specials
          </h2>
        </div>
        <p className='text-center px-8 md:px-16'>
          Join us for undeniable daily Happy Hour & Late Night specials.
        </p>
        <div
          className={`${componentName}_VIEW_MENU_BUTTON main_button mt-2`}
          aria-label='Lobby Bar Restaurant | Main Page | Section One | View Menu Button'
          title='Lobby Bar Restaurant | Main Page | Section One | View Menu Button'
          onClick={handleButtonClick}
        >
          view menu
        </div>
      </div>
    </div>
  );
};

export default MainSectionFour;
