const HamiltonHoursContainer = () => {
  const componentName = 'HAMILTON_HOURS';
  return (
    <div
      className={`${componentName}_HOURS_CONTAINER text-center h-full flex flex-col justify-center items-center `}
    >
      <div className='h-fit flex flex-col gap-4 justify-center items-center text-[20px]'>
        <h2 className='uppercase text-[20px]'>
          Hours of Operation
        </h2>
        <h3 className='font-[200]'>Monday Closed</h3>
        <h3 className='font-[200]'>Tuesday 11:00am - Late</h3>
        <h3 className='font-[200]'>Wednesday 11:00am - Late</h3>
        <h3 className='font-[200]'>Thursday 11:00am - Late</h3>
        <h3 className='font-[200]'>Friday 11:00am - Late</h3>
        <h3 className='font-[200]'>Saturday 11:00am - Late</h3>
        <h3 className='font-[200]'>Sunday 10:00am - Late</h3>
        <h3 className='font-[200]'>
        Join us for Lunch every Tuesday to Saturday 11am – 3pm
        </h3>
        <h3 className='font-[200]'>& Sunday Brunch 10am – 3pm</h3>
      </div>
    </div>
  );
};

export default HamiltonHoursContainer;
