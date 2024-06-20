import { FuturaBoldCondesedBT } from '@/src/util/fonts/fonts';

const HamiltonHoursContainer = () => {
  const componentName = 'HAMILTON_HOURS';
  const styling = "font-[200] text-[18px]"
  return (
    <div
      className={`${componentName}_HOURS_CONTAINER text-center h-full flex flex-col justify-center items-center `}
    >
      <div className='h-fit flex flex-col gap-4 justify-center items-center text-[20px]'>
      <h2 className={`${FuturaBoldCondesedBT.className} uppercase text-[18px] font-[400]`}>Hours of Operation</h2>
        <h3 className={`${styling}`}>Monday Closed</h3>
        <h3 className={`${styling}`}>Tuesday 11:00am - Late</h3>
        <h3 className={`${styling}`}>Wednesday 11:00am - Late</h3>
        <h3 className={`${styling}`}>Thursday 11:00am - Late</h3>
        <h3 className={`${styling}`}>Friday 11:00am - Late</h3>
        <h3 className={`${styling}`}>Saturday 11:00am - Late</h3>
        <h3 className={`${styling}`}>Sunday 10:00am - Late</h3>
        <h3 className={`${styling}`}>
        Join us for Lunch every Tuesday to Saturday 11am – 3pm
        </h3>
        <h3 className={`${styling}`}>& Sunday Brunch 10am – 3pm</h3>
      </div>
    </div>
  );
};

export default HamiltonHoursContainer;
