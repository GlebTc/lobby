'use client';
import { useState, useEffect } from 'react';

const Location = () => {
  const componentName = 'LOCATION';
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
      className={`${componentName}_MAIN_CONTAINER h-[70dvh] overflow-hidden relative`}
    >
      <div
        className={`${componentName}_TORONTO_SLIDE_IN_BUTTON ${
          torontoButton
            ? `${componentName}_TORONTO_SLIDE_IN_BUTTON_OPEN absolute right-0 top-[5%] w-[100%] h-[30dvh] bg-red-200 ease-in-out duration-[var(--main-duration)]`
            : `${componentName}_TORONTO_SLIDE_IN_BUTTON_CLOSED MOBILE_MENU absolute opacity-0 right-[-100%] top-[5%] w-[100%] h-[30dvh] bg-red-200 ease-in duration-[var(--main-duration)]`
        }`}
      >
        <a href="/locations/toronto" className='main_button h-full w-full flex flex-col justify-center items-center animate-none text-center gap-4 px-8'>
          <h1>Toronto</h1>
          <p>1032 Queen St W, Toronto, ON M6J 1H7</p>
          <p>(416) 901-6768</p>
        </a>
      </div>
      <div
        className={`${componentName}_HAMILTON_SLIDE_IN_BUTTON ${
          torontoButton
            ? `${componentName}_HAMILTON_SLIDE_IN_BUTTON_OPEN absolute left-0 top-[55%] w-[100%] h-[30dvh] bg-blue-200 ease-in-out duration-[var(--main-duration)] delay-[var(--main-duration)]`
            : `${componentName}_HAMILTON_SLIDE_IN_BUTTON_CLOSED MOBILE_MENU absolute opacity-0 left-[-100%] top-[55%] w-[100%] h-[30dvh] bg-blue-200 ease-in duration-[var(--main-duration)]`
        }`}
      >
        <a href="/locations/hamilton" className='main_button h-full w-full flex flex-col justify-center items-center animate-none text-center gap-4 px-8'>
          <h1>Hamilton</h1>
          <p>151 James St S, Hamilton, ON L8P 2Z5</p>
          <p>(289) 389-3109</p>
        </a>
      </div>
    </div>
  );
};

export default Location;
