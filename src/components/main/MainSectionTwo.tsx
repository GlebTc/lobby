'use client';
import { useLocationPickerStore } from '@/src/util/stores/LocationPickerStore';
import { HeaderBold } from '@/src/util/fonts/fonts';

const MainSectionTwo = () => {
  const componentName = 'MAIN_SECTION_TWO';
  const { showLocationPicker, setShowLocationPicker, setSelectedMenuItem } =
    useLocationPickerStore();

  const handleButtonClick = () => {
    setSelectedMenuItem('reservations');
    setShowLocationPicker(showLocationPicker);
  };
  return (
    <div className={`${componentName}_MAIN_CONTAINER relative h-[70dvh]`}>
      <div
        className={`${componentName}_OVERLAY_CONTAINER absolute top-0 left-0 h-full w-full`}
      ></div>
      <div
        className={`${componentName}_TEXT_AND_BUTTON_CONTAINER absolute top-0 left-0 w-[100%] h-[100%] flex flex-col gap-4 justify-center items-center text-white bg-gray-950/50 text-center`}
      >
        <h1 className={`${HeaderBold.className} text-[30px]`}>Late Nights Redefined</h1>
        <p className='text-white pb-2 px-16 text-[14px]'>
          Embrace the night in style, surrounded by contemporary design and an
          atmosphere that's as lively as your spirits. Elevate your late-night
          experience at Lobby.
        </p>
        <div
          aria-label={`Lobby Bar Restaurant | Main Page | Late Night Redefined | Reserve Now Button`}
          title={`Lobby Bar Restaurant | Main Page | Late Night Redefined | Reserve Now Button`}
          onClick={handleButtonClick}
          className={`${componentName}_RESERVATION_BUTTON secondary_button cursor-pointer`}
        >
          reserve now
        </div>
      </div>
    </div>
  );
};

export default MainSectionTwo;
