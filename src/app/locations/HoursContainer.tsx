import React from 'react';

const HoursContainer = ({ componentName }: { componentName: string }) => {
  return (
    <div
      className={`${componentName}_HOURS_CONTAINER text-center h-full flex flex-col justify-center items-center `}
    >
      <div className='h-fit p-8 flex flex-col gap-8 justify-center items-center rounded-lg shadow-lg shadow-gray-500'>
        <h2 className='uppercase tracking-tighter'>Hours of Operation</h2>
        <h3>Thursday 6:00pm - 2:00am</h3>
        <h3>Friday 6:00pm - 2:00am</h3>
        <h3>Saturday 6:00pm - 2:00am</h3>
        <h3>Sunday 6:00pm - 2:00am</h3>
        <h3>Join Us for Toronto's favourite BRUNCH every Sunday</h3>
      </div>
    </div>
  );
};

export default HoursContainer;
