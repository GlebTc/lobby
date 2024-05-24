'use client';
import { useLocationPickerStore } from '@/src/util/stores/LocationPickerStore';
import Image from 'next/image';
import main_section_one_img_smaller from '@/public/assets/main_section_one_img_smaller.webp';

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
      className={`${componentName}_MAIN_CONTAINER h-fit grid md:grid-cols-2 md:py-8 lg:px-4 md:p-4`}
    >
      <div
        className={`${componentName}_IMG_CONTAINER h-full flex items-center`}
      >
        <div className='relative h-[40vh] w-full'>
          <Image
            src={main_section_one_img_smaller}
            alt={`Lobby Bar Restaurant | Main Page | Lobby Cappucino Image`}
            title={`Lobby Bar Restaurant | Main Page | Lobby Cappucino Image`}
            fill
            sizes='1'
            className='floating_container object-cover'
            priority
            quality={50}
          />
        </div>
      </div>
      <div
        className={`${componentName}_CONTENT_CONTAINER flex flex-col items-center justify-center gap-8 h-full p-4 lg:p-12 text-center sm:min-h-[331px]`}
      >
        <div
          className={`${componentName}_HEADINGS_CONTAINER text-3xl font-[700] tracking-widest flex flex-col items-center`}
        >
          <h2>Global Flavors</h2>
          <h2>Unforgetable Moments</h2>
        </div>
        <p>
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
