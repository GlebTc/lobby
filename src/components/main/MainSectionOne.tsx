'use client';
import { useLocationPickerStore } from '@/src/util/stores/LocationPickerStore';
import Image from 'next/image';
import main_section_one_img_smaller from '@/public/assets/main_section_one_img_smaller.webp';
import { HeaderBold } from '@/src/util/fonts/fonts';

const MainSectionOne = () => {
  const componentName = 'MAIN_SECTION_ONE';
  const { showLocationPicker, setShowLocationPicker, setSelectedMenuItem } =
    useLocationPickerStore();

  const handleButtonClick = () => {
    setSelectedMenuItem('menus');
    setShowLocationPicker(showLocationPicker);
  };
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-fit grid md:grid-cols-2 md:py-8 lg:px-4 md:p-4 bg-white`}
    >
      <div
        className={`${componentName}_IMG_CONTAINER h-full flex items-center`}
      >
        <div className='relative h-[48vh] w-full'>
          <Image
            src={main_section_one_img_smaller}
            alt={`Lobby Bar Restaurant | Main Page | Lobby Cappucino Image`}
            title={`Lobby Bar Restaurant | Main Page | Lobby Cappucino Image`}
            fill
            sizes='auto'
            className='floating_container object-cover'
            priority
            quality={100}
          />
        </div>
      </div>
      <div
        className={`${componentName}_CONTENT_CONTAINER flex flex-col items-center justify-center gap-4 h-[255px] p-4 lg:p-12 text-center`}
      >
        <div
          className={`${componentName}_HEADINGS_CONTAINER flex flex-col items-center`}
        >
          <h2 className={`${HeaderBold.className} text-[32px]`}>
            Global Flavors, Unforgettable Moments
          </h2>
        </div>
        <p className={`text-[16px]`}>
          At Lobby, we currate a journey of global flavors, paired with
          handcrafted coctails and an inviting atmosphere that transforms dining
          into an experience.
        </p>
        <div
          className={`${componentName}_VIEW_MENU_BUTTON main_button`}
          aria-label={`Lobby Bar Restaurant | Main Page | Section One | View Menu Button`}
          title={`Lobby Bar Restaurant | Main Page | Section One | View Menu Button`}
          onClick={handleButtonClick}
        >
          view menu
        </div>
      </div>
    </div>
  );
};

export default MainSectionOne;
