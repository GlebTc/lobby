'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import private_events_hamilton_two from '@/public/assets/private_events_hamilton_two.webp';
import private_events_toronto_two from '@/public/assets/private_events_toronto_two.webp';

const Reservations = () => {
  const componentName = 'RSERVATIONS';
  const [torontoButton, setTorontoButton] = useState(false);
  const [hamiltonButton, setHamiltonButton] = useState(false);

  useEffect(() => {
    const activateSlide = () => {
      setTorontoButton(!torontoButton);
      setHamiltonButton(!hamiltonButton);
    };

    activateSlide();
  }, []);

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-[70dvh] overflow-hidden relative text-center`}
    >
      <div
        className={`${componentName}_TORONTO_SLIDE_IN_BUTTON ${
          torontoButton
            ? `${componentName}_TORONTO_SLIDE_IN_BUTTON_OPEN absolute right-0 top-[5%] w-[100%] h-[30dvh] ease-in-out duration-[var(--main-duration)]`
            : `${componentName}_TORONTO_SLIDE_IN_BUTTON_CLOSED MOBILE_MENU absolute opacity-0 right-[-100%] top-[5%] w-[100%] h-[30dvh] ease-in duration-[var(--main-duration)]`
        }`}
      >
        <div className='text-lg font-[700] px-2 py-1  text-black border-[1px] border-[var(--main-bg-color)] w-[98dvw] md:w-[70dvw] lg:w-[60dvw] mx-auto h-full flex flex-col gap-4 justify-center items-center rounded-lg relative group shadow-lg shadow-[var(--main-text-color)]'>
          <Image
            src={private_events_toronto_two}
            alt='Private Events Hamilton'
            fill
            className='object-cover opacity-60 z-[-1] rounded-lg group-hover:opacity-10 duration-[var(--main-duration)]'
            quality={10}
            priority
            sizes='auto'
          />
          <h1>Toronto</h1>
          <p className='text-black'>1032 Queen St W, Toronto, ON M6J 1H7</p>
          <p className='text-black'>(416) 901-6768</p>
          <a
            href='https://www.opentable.ca/r/lobby-toronto'
            className='main_button'
          >
            Make Reservation
          </a>
        </div>
      </div>
      <div
        className={`${componentName}_HAMILTON_SLIDE_IN_BUTTON ${
          torontoButton
            ? `${componentName}_HAMILTON_SLIDE_IN_BUTTON_OPEN absolute left-0 top-[55%] w-[100%] h-[30dvh] ease-in-out duration-[var(--main-duration)] delay-[var(--main-duration)]`
            : `${componentName}_HAMILTON_SLIDE_IN_BUTTON_CLOSED MOBILE_MENU absolute opacity-0 left-[-100%] top-[55%] w-[100%] h-[30dvh] ease-in duration-[var(--main-duration)]`
        }`}
      >
        <div className='text-lg font-[700] px-2 py-1  text-black border-[1px] border-[var(--main-bg-color)] w-[98dvw] md:w-[70dvw] lg:w-[60dvw] mx-auto h-full flex flex-col gap-4 justify-center items-center rounded-lg relative group shadow-lg shadow-[var(--main-text-color)]'>
          <Image
            src={private_events_hamilton_two}
            alt='Private Events Hamilton'
            fill
            className='object-cover opacity-60 z-[-1] rounded-lg group-hover:opacity-10 duration-[var(--main-duration)]'
            quality={10}
            priority
            sizes='auto'
          />
          <h1>Hamilton</h1>
          <p className='text-black'>151 James St S, Hamilton, ON L8P 2Z5</p>
          <p className='text-black'>(289) 389-3109</p>
          <a
            href='https://www.opentable.ca/r/lobby-hamilton'
            className='main_button'
          >
            Make Reservation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
