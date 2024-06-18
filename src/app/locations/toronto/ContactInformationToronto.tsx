import { HeaderBold } from '@/src/util/fonts/fonts';

const ContactInformationToronto = ({
  componentName,
}: {
  componentName: string;
}) => {
  return (
    <div
    className={`${componentName}_CONTACT_INFORMATION_CONTENT_CONTAINER bg-[var(--main-bg-color)] w-[90%] flex flex-col justify-center items-center text-center py-2 uppercase shadow-md shadow-gray-300 h-[270px] mb-8`}
    >
      <h1 className={`${HeaderBold.className} text-[30px] mb-4`}>Toronto</h1>
      <a
        href='https://www.opentable.ca/r/lobby-toronto'
        className='uppercase text-base font-[500] px-4 py-2 bg-[var(--secondary-color)] text-white border-[1px] border-[var(--secondary-color)]  duration-[var(--main-duration)] hover:text-black min-w-[150px] cursor-pointer text-center mb-4 w-[65%]'
      >
        Reserve Now
      </a>
      <div className='flex flex-col font-[500]'>
        <h3 className='font-[500] text-[18px]'>1032 Queen St West</h3>
        <h3 className='font-[500] text-[18px]'>TORONTO, ON M6J 1H7</h3>
        <a
          aria-label={`Lobby Bar Restaurant | Locations Toronto | Call (416) 901-6768`}
          title={`Lobby Bar Restaurant | Locations Toronto | Call (416) 901-6768`}
          href='tel:4169016768'
          className='hover:text-[var(--main-text-color)] w-fit mx-auto duration-[var(--main-duration)] underline text-[18px]'
        >
          (416) 901-6768
        </a>
      </div>
    </div>
  );
};

export default ContactInformationToronto;
