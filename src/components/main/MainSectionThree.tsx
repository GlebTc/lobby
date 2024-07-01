'use client';
import { useLocationPickerStore } from '@/src/util/stores/LocationPickerStore';
import Image from 'next/image';
import main_section_three_img from '@/public/assets/main_section_three_img.webp';
import { HeaderBold } from '@/src/util/fonts/fonts';

const MainSectionThree = () => {
  const componentName = 'MAIN_SECTION_THREE';
  const { showLocationPicker, setShowLocationPicker, setSelectedMenuItem } =
    useLocationPickerStore();

  const handleButtonClick = () => {
    setSelectedMenuItem('locations');
    setShowLocationPicker(showLocationPicker);
  };
  return (
    <div>
      <div
        className={`${componentName}_MAIN_CONTAINER h-fit grid md:grid-cols-2 md:py-8 lg:px-4 md:p-4 bg-white`}
      >
        <div
          className={`${componentName}_IMG_CONTAINER h-full flex items-center order-2`}
        >
          <div className='relative h-[48vh] lg:h-[75dvh] w-full'>
            <Image
              src={main_section_three_img}
              alt='Lobby Bar Restaurant | Main Page | Savor Flavor in Two Cities Image'
              title='Lobby Bar Restaurant | Main Page | Savor Flavor in Two Cities Image'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='floating_container object-cover'
              quality={80}
              priority
            />
          </div>
        </div>
        <div
          className={`${componentName}_CONTENT_CONTAINER flex flex-col items-center justify-center gap-8 h-full p-4 lg:p-12 text-center sm:min-h-[245px]`}
        >
          <div
            className={`${componentName}_HEADINGS_CONTAINER text-3xl font-[700] flex justify-center`}
          >
            <h2 className={`${HeaderBold.className} text-[30px]`}>
              Enjoy $1 Oysters
            </h2>
          </div>
          <p className={`text-[14px] md:px-20`}>
            Join us Tuesdays for Buck-A-Shuck from 3pm - close at lobby Hamilton
            and Thursdays from 6pm - 9pm at our Toronto location.{' '}
            <span className='italic'> No hidden fees or restrictions.</span>
          </p>

          <div
            className={`${componentName}_VIEW_MENU_BUTTON main_button`}
            aria-label={`Lobby Bar Restaurant | Main Page | Section One | View Menu Button`}
            title={`Lobby Bar Restaurant | Main Page | Section One | View Menu Button`}
            onClick={handleButtonClick}
          >
            view locations
          </div>
        </div>
      </div>
      <div
        className={`${componentName}_SECOND_SECTION_DELICIOUS h-full flex flex-col justify-center items-center text-center gap-4 p-8 bg-[var(--main-bg-color)] md:p-12 sm:min-h-[245px]`}
      >
        <div
          className={`${componentName}_HEADINGS_CONTAINER flex flex-col items-center`}
        >
          <h2 className={`${HeaderBold.className} text-[30px]`}>
            Delicious Culinary Masterpieces
          </h2>
        </div>
        <p className={`text-[14px] md:px-20`}>
          Try our new creations and explore a carousel of flavours our guests
          can’t get enough of.
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

export default MainSectionThree;
