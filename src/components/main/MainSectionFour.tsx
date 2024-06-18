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
            alt={`Lobby Bar Restaurant | Main Page | Section Four | Indulge in Weekend Bliss Image`}
            title={`Lobby Bar Restaurant | Main Page | Section Four | Indulge in Weekend Bliss Image`}
            fill
            sizes='auto'
            className='object-cover'
            placeholder='blur'
            priority
            quality={100}
          />
        </div>
        <div
          className={`${componentName}_HEADINGS_CONTAINER text-3xl font-[700] tracking-widest flex flex-col items-center text-center`}
        >
          <h2
            className={`${HeaderBold.className} text-[32px] tracking-tight`}
          >
            Indulge in Weekend Bliss
          </h2>
        </div>
        <p className='text-center px-8'>
          Brunch like never before. From classics to innovative creations, our
          menu is a celebration of weekend indulgence
        </p>
        <div
          className={`${componentName}_VIEW_MENU_BUTTON main_button`}
          aria-label={`Lobby Bar Restaurant | Main Page | Section One | View Menu Button`}
          title={`Lobby Bar Restaurant | Main Page | Section One | View Menu Button`}
          onClick={handleButtonClick}
        >
          explore menu
        </div>
      </div>
      <div
        className={`${componentName}_EXPLORE_MENU_TWO_CONTAINER p-4 flex flex-col justify-center items-center gap-4`}
      >
        <div className='relative h-[90dvh] w-[90dvw] md:w-[40dvw]'>
          <Image
            src={main_section_four_img_two}
            alt={`Lobby Bar Restaurant | Main Page | Section Four | Elegance Meets Expereience Image`}
            title={`Lobby Bar Restaurant | Main Page | Section Four | Elegance Meets Expereience Image`}
            fill
            sizes='auto'
            className='object-cover'
            placeholder='blur'
            priority
            quality={100}
          />
        </div>
        <div
          className={`${componentName}_HEADINGS_CONTAINER text-3xl font-[700] tracking-widest flex flex-col items-center text-center`}
        >
          <h2
            className={`${HeaderBold.className} text-[32px] tracking-tight`}
          >
            Elegance Meets Excellence
          </h2>
        </div>
        <p className='text-center px-8'>
          As the sun sets, join us for a dinner that transcends the ordinary.
          Immerse yourself in an evening of culinary delight and sophisticated
          ambiance.
        </p>
        <div
          className={`${componentName}_VIEW_MENU_BUTTON main_button`}
          aria-label={`Lobby Bar Restaurant | Main Page | Section One | View Menu Button`}
          title={`Lobby Bar Restaurant | Main Page | Section One | View Menu Button`}
          onClick={handleButtonClick}
        >
          explore menu
        </div>
      </div>
    </div>
  );
};

export default MainSectionFour;
