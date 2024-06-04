'use client';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import NewsLetter from '../navbar/NewsLetter';
import { useLocationPickerStore } from '@/src/util/stores/LocationPickerStore';
import { GlacialIndifferenceBold } from '@/src/util/fonts/fonts';

const LocationPicker = () => {
  const componentName = 'LOCATION_PICKER';
  const { showLocationPicker, setShowLocationPicker, selectedMenuItem } =
    useLocationPickerStore();

  const handleCloseButtonClick = () => {
    setShowLocationPicker(showLocationPicker);
  };

  return (
    <div className={`${componentName}_MAIN_CONTAINER relative`}>
      <div className={`${selectedMenuItem ? 'relative' : ''}`}>
        <div
          className={
            showLocationPicker
              ? `${componentName}_OVERLAY fixed left-0 top-0 w-full h-screen bg-gray-800/90 duration-300`
              : `${componentName}_OVERLAY hidden`
          }
        ></div>
        <div
          className={`${
            showLocationPicker
              ? `${componentName}_SIDE_MENU_CONTAINER fixed top-0 left-0 w-[300px] sm:w-[350px] h-full bg-[#fff9ef] duration-[var(--main-duration)]`
              : `${componentName}_SIDE_MENU_CONTAINER fixed top-0 left-[-350px] w-[350px] h-full bg-[#fff9ef] duration-[var(--main-duration)]`
          }`}
        >
          <div
            className={`${componentName}_HEADER_CONTAINER relative h-[120px] w-[100%] border-b-[1px] border-[var(--secondary-color)] flex items-center justify-center`}
          >
            <div className={`${GlacialIndifferenceBold.className} uppercase`}>
              Choose A Location
            </div>
            <IoClose
              onClick={handleCloseButtonClick}
              size={25}
              className='absolute right-5 top-[1/2] text-[var(--secondary-color)] cursor-pointer hover:text-black duration-[var(--main-duration)]'
            />
          </div>
          <Link
            href={
              selectedMenuItem == 'reservations'
                ? 'https://www.opentable.ca/r/lobby-toronto'
                : `${selectedMenuItem}/toronto`
            }
            onClick={handleCloseButtonClick}
            className='h-[70px] w-[100%] border-b-[1px] border-[var(--secondary-color)] flex items-center justify-center hover:text-[var(--secondary-color)] duration-[var(--main-duration)] text-[16px] uppercase'
          >
            Toronto
          </Link>
          <Link
            href={
              selectedMenuItem == 'reservations'
                ? 'https://www.opentable.ca/r/lobby-hamilton'
                : `${selectedMenuItem}/hamilton`
            }
            onClick={handleCloseButtonClick}
            className='h-[70px] w-[100%] border-b-[1px] border-[var(--secondary-color)] flex items-center justify-center hover:text-[var(--secondary-color)] duration-[var(--main-duration)] text-[16px] uppercase'
          >
            Hamilton
          </Link>
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default LocationPicker;
