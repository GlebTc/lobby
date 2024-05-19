const ContactInformationHamilton = ({
  componentName,
}: {
  componentName: string;
}) => {
  return (
    <div
      className={`${componentName}_CONTACT_INFORMATION_CONTENT_CONTAINER bg-[var(--main-bg-color)] w-[90%] flex flex-col justify-center items-center text-center py-2 uppercase shadow-md shadow-gray-300 h-[270px] mb-8`}
    >
      <h1 className='tracking-tight'>Hamilton</h1>
      <a
        href='/reservations'
        className='main_button mb-4 w-[75%]'
      >
        Reserve Now
      </a>
      <div className='flex flex-col gap-[4px] font-[500]'>
        <h3 className='font-[500] text-[18px]'>151 James Street South,</h3>
        <h3 className='font-[500] text-[18px]'>Hamilton, ON L8P 2Z5</h3>
        <a
          aria-label={`Lobby Bar Restaurant | Locations Hamilton | Call 289-389-3109`}
          title={`Lobby Bar Restaurant | Locations Hamilton | Call 289-389-3109`}
          href='tel:4169016768'
          className='hover:text-[var(--main-text-color)] w-fit mx-auto duration-[var(--main-duration)] underline text-[18px]'
        >
          1 (289) 389-3109
        </a>
      </div>
    </div>
  );
};

export default ContactInformationHamilton;
