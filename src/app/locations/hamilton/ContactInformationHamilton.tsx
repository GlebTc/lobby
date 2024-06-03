import { GlacialIndifferenceBold } from '@/src/util/fonts/fonts';

const ContactInformationHamilton = ({
  componentName,
}: {
  componentName: string;
}) => {
  return (
    <div
      className={`${componentName}_CONTACT_INFORMATION_CONTENT_CONTAINER bg-[var(--main-bg-color)] w-[90%] flex flex-col justify-center items-center text-center py-2 uppercase shadow-md shadow-gray-300 h-[270px] mb-8`}
    >
      <h1
        className={`tracking-tight ${GlacialIndifferenceBold.className} text-[30px] mb-4`}
      >
        Hamilton
      </h1>
      <a
        href='https://www.opentable.ca/r/lobby-hamilton'
        className='uppercase text-base font-[500] px-4 py-2 bg-[var(--secondary-color)] text-white border-[1px] border-[var(--secondary-color)]  duration-[var(--main-duration)] hover:text-black min-w-[150px] cursor-pointer text-center mb-4 w-[65%]'
      >
        Reserve Now
      </a>
      <div className='flex flex-col font-[500]'>
        <h3 className='font-[500] text-[18px]'>151 James Street South,</h3>
        <h3 className='font-[500] text-[18px]'>Hamilton, ON L8P 2Z5</h3>
        <a
          aria-label={`Lobby Bar Restaurant | Locations Hamilton | Call 289-389-3109`}
          title={`Lobby Bar Restaurant | Locations Hamilton | Call 289-389-3109`}
          href='tel:2893893109'
          className='hover:text-[var(--main-text-color)] w-fit mx-auto duration-[var(--main-duration)] underline text-[18px]'
        >
          1 (289) 389-3109
        </a>
      </div>
    </div>
  );
};

export default ContactInformationHamilton;
