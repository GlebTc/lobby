const ContactInformationHamilton = ({
  componentName,
}: {
  componentName: string;
}) => {
  return (
    <div
      className={`${componentName}_CONTACT_INFORMATION_CONTENT_CONTAINER bg-[var(--main-bg-color)] w-[90%] flex flex-col justify-center items-center text-center py-2 uppercase rounded-lg shadow-md shadow-gray-500`}
    >
      <h1>Hamilton</h1>
      <a
        href='/reservations'
        className='main_button mb-4 animate-bounce'
      >
        Reserve Now
      </a>
      <div className='flex flex-col gap-2'>
        <h3>151 James St S, Hamilton, ON L8P 2Z5</h3>
        <a
          aria-label={`Lobby Bar Restaurant | Locations Hamilton | Call 289-389-3109`}
          title={`Lobby Bar Restaurant | Locations Hamilton | Call 289-389-3109`}
          href='tel:4169016768'
          className='font-bold hover:text-[var(--main-text-color)] w-fit mx-auto duration-[var(--main-duration)]'
        >
          (289) 389-3109
        </a>
      </div>
    </div>
  );
};

export default ContactInformationHamilton;
