import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import NewsLetter from './NewsLetter';

const LocationPicker = ({
  showLocationPicker,
  setShowLocationPicker,
  selectedMenuItem,
}: {
  setShowLocationPicker: any;
  showLocationPicker: boolean;
  selectedMenuItem: string;
}) => {
  const componentName = 'LOCATION_PICKER';
  const handleClick = () => {
    setShowLocationPicker(!showLocationPicker);
  };
  return (
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <div
        className={
          showLocationPicker
            ? `${componentName}_OVERLAY md:hidden fixed left-0 top-0 w-full h-screen bg-gray-800/90 duration-300`
            : `${componentName}_OVERLAY hidden`
        }
      ></div>
      <div
        className={`${
          showLocationPicker
            ? `${componentName}_SIDE_MENU_CONTAINER fixed top-0 left-0 w-[350px] h-full bg-[#fff9ef] duration-[var(--main-duration)]`
            : `${componentName}_SIDE_MENU_CONTAINER fixed top-0 left-[-100%] w-[350px] h-full bg-[#fff9ef] duration-[var(--main-duration)]`
        }`}
      >
        <div
          className={`${componentName}_HEADER_CONTAINER relative h-[120px] w-[100%] border-b-[1px] border-[var(--secondary-color)] flex items-center justify-center`}
        >
          <div className='font-[600] text-[16px] tracking-wide'>
            Choose A Location
          </div>
          <IoClose
            onClick={handleClick}
            size={25}
            className='absolute right-5 top-[1/2] text-[var(--secondary-color)] cursor-pointer hover:text-black duration-[var(--main-duration)]'
          />
        </div>
        <Link
          href={`${selectedMenuItem}/toronto`}
          onClick={() => setShowLocationPicker(!showLocationPicker)}
          className='h-[70px] w-[100%] border-b-[1px] border-[var(--secondary-color)] flex items-center justify-center'
        >
          Toronto
        </Link>
        <Link
          href={`${selectedMenuItem}/hamilton`}
          onClick={() => setShowLocationPicker(!showLocationPicker)}
          className='h-[70px] w-[100%] border-b-[1px] border-[var(--secondary-color)] flex items-center justify-center'
        >
          Hamilton
        </Link>
        <NewsLetter />
      </div>
    </div>
  );
};

export default LocationPicker;
