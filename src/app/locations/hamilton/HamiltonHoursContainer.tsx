const HamiltonHoursContainer = () => {
  const componentName = 'HAMILTON_HOURS';
  return (
    <div
      className={`${componentName}_HOURS_CONTAINER text-center h-full flex flex-col justify-center items-center `}
    >
      <div className='h-fit flex flex-col gap-8 justify-center items-center text-[20px]'>
        <h2 className='uppercase tracking-tighter text-[20px]'>
          Hours of Operation
        </h2>
        <h3 className='font-[200]'>Monday Closed</h3>
        <h3 className='font-[200]'>Tuesday 5:00pm - 11:00pm</h3>
        <h3 className='font-[200]'>Wednesday 5:00pm - 11:00pm</h3>
        <h3 className='font-[200]'>Thursday 5:00pm - 12:00am</h3>
        <h3 className='font-[200]'>Friday 5:00pm - Late</h3>
        <h3 className='font-[200]'>Saturday 5:00pm - Late</h3>
        <h3 className='font-[200]'>Sunday 10:00am - 11:00pm</h3>
        <h3 className='font-[200]'>
          Join Us for Hamilton's favourite BRUNCH every Sunday
        </h3>
      </div>
    </div>
  );
};

export default HamiltonHoursContainer;
