import React from 'react';

const TorontoHoursContainer = () => {
  const componentName = 'TORONTO_HOURS';
  return (
    <div
      className={`${componentName}_HOURS_CONTAINER text-center h-full flex flex-col justify-center items-center `}
    >
      <div className='h-fit p-8 flex flex-col gap-8 justify-center items-center'>
        <h2 className='uppercase tracking-tighter'>Hours of Operation</h2>
        <h3 className='text-[20px] font-[400]'>Thursday 6:00pm - 2:00am</h3>
        <h3 className='text-[20px] font-[400]'>Friday 6:00pm - 2:00am</h3>
        <h3 className='text-[20px] font-[400]'>Saturday 6:00pm - 2:00am</h3>
        <h3 className='text-[20px] font-[400]'>Sunday 11:00am - 6:00pm</h3>
        <h3 className='text-[20px] font-[400]'>
          Join Us for Toronto's favourite BRUNCH every Sunday
        </h3>
      </div>
    </div>
  );
};

export default TorontoHoursContainer;