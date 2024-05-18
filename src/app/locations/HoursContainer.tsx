import React from 'react';

const HoursContainer = ({ componentName, location }: { componentName: string, location: string }) => {
  return (
    <div
      className={`${componentName}_HOURS_CONTAINER text-center h-full flex flex-col justify-center items-center `}
    >
      <div className='h-fit p-8 flex flex-col gap-8 justify-center items-center'>
        <h2 className='uppercase tracking-tighter'>Hours of Operation</h2>
        <h3 className='text-[20px] font-[400]'>Monday Closed</h3>
        <h3 className='text-[20px] font-[400]'>Tuesday 5:00pm - 11:00pm</h3>
        <h3 className='text-[20px] font-[400]'>Wednesday 5:00pm - 11:00pm</h3>
        <h3 className='text-[20px] font-[400]'>Thursday 5:00pm - 12:00am</h3>
        <h3 className='text-[20px] font-[400]'>Friday 5:00pm - Late</h3>
        <h3 className='text-[20px] font-[400]'>Saturday 6:00pm - Late</h3>
        <h3 className='text-[20px] font-[400]'>Sunday 10:00am - 11:00pm</h3>
        <h3 className='text-[20px] font-[400]'>Join Us for {location}'s favourite BRUNCH every Sunday</h3>
      </div>
    </div>
  );
};

export default HoursContainer;
