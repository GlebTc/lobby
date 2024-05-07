'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import private_events_hamilton_two from '@/public/assets/private_events_hamilton_two.webp';
import private_events_toronto_two from '@/public/assets/private_events_toronto_two.webp';
import TorontoSlideInButton from '@/src/components/reusable/TorontoSlideInButton';
import HamiltonSlideInButton from '@/src/components/reusable/HamiltonSlideInButton';

const Locations = () => {
  const componentName = 'LOCATIONS';
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
            ? `${componentName}_TORONTO_SLIDE_IN_BUTTON_OPEN absolute right-0 top-[5%] w-[100%] h-[30dvh] ease-in-out duration-[var(--main-duration)]`
            : `${componentName}_TORONTO_SLIDE_IN_BUTTON_CLOSED MOBILE_MENU absolute opacity-0 right-[-100%] top-[5%] w-[100%] h-[30dvh] ease-in duration-[var(--main-duration)]`
        }`}
      >
        <TorontoSlideInButton
          componentName={componentName}
          href='menus'
          title='Lobby Bar Menus'
        />
      </div>
      <div
        className={`${componentName}_HAMILTON_SLIDE_IN_BUTTON ${
          torontoButton
            ? `${componentName}_HAMILTON_SLIDE_IN_BUTTON_OPEN absolute left-0 top-[55%] w-[100%] h-[30dvh] ease-in-out duration-[var(--main-duration)] delay-[var(--main-duration)]`
            : `${componentName}_HAMILTON_SLIDE_IN_BUTTON_CLOSED MOBILE_MENU absolute opacity-0 left-[-100%] top-[55%] w-[100%] h-[30dvh] ease-in duration-[var(--main-duration)]`
        }`}
      >
        <HamiltonSlideInButton
          componentName={componentName}
          href='menus'
          title='Lobby Bar Menus'
        />
      </div>
    </div>
  );
};

export default Locations;
