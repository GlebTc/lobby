'use client';
import { useLocationPickerStore } from '@/src/util/stores/LocationPickerStore';
import Image from 'next/image';
import main_section_one_img from '@/public/assets/main_section_one_img.webp';
import { HeaderBold } from '@/src/util/fonts/fonts';

const MainSectionOne = () => {
  const componentName = 'MAIN_SECTION_ONE';
  const { showLocationPicker, setShowLocationPicker, setSelectedMenuItem } =
    useLocationPickerStore();

  const handleButtonClick = () => {
    setSelectedMenuItem('reservations');
    setShowLocationPicker(showLocationPicker);
  };
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-fit grid md:grid-cols-2 md:py-8 lg:px-4 md:p-4 bg-white`}
    >
      <div
        className={`${componentName}_IMG_CONTAINER h-full flex items-center`}
      >
        <div className='relative h-[48vh] lg:h-[75dvh] w-full'>
          <Image
            src={main_section_one_img}
            alt={`Lobby Bar Restaurant | Main Page | Summer Slushie Vibe Picture`}
            title={`Lobby Bar Restaurant | Main Page | Summer Slushie Vibe Picture`}
            fill
            sizes='auto'
            className='floating_container object-cover'
            priority
            quality={100}
          />
        </div>
      </div>
      <div
        className={`${componentName}_CONTENT_CONTAINER flex flex-col items-center justify-center gap-4 sm:min-h-[255px] p-4 lg:p-12 text-center`}
      >
        <div
          className={`${componentName}_HEADINGS_CONTAINER flex flex-col items-center`}
        >
          <h2 className={`${HeaderBold.className} text-[30px]`}>
          Summer Sessions Are Here
          </h2>
        </div>
        <p className={`text-[14px] md:px-20`}>
        Join us every Wednesday for $5 drink deals from 3pm-6pm & 9pm-close.
        </p>
        <div
          className={`${componentName}_VIEW_MENU_BUTTON main_button`}
          aria-label={`Lobby Bar Restaurant | Main Page | Section One | Reserve Now Button`}
          title={`Lobby Bar Restaurant | Main Page | Section One | View Menu Button`}
          onClick={handleButtonClick}
        >
          Reserve now
        </div>
      </div>
    </div>
  );
};

export default MainSectionOne;
