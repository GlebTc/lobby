const ContactInformationToronto = ({
  componentName,
}: {
  componentName: string;
}) => {
  return (
    <div
      className={`${componentName}_CONTACT_INFORMATION_CONTENT_CONTAINER bg-[var(--main-bg-color)] w-[90%] flex flex-col justify-center items-center text-center py-2 uppercase rounded-lg shadow-md shadow-gray-500`}
    >
      <h1>Toronto</h1>
      <a
        href='/reservations'
        className='main_button mb-4 animate-bounce'
      >
        Reserve Now
      </a>
      <div className='flex flex-col gap-2'>
        <h3>1032 QUEEN ST WEST TORONTO, ON M6J 1H7</h3>
        <a
          aria-label={`Lobby Bar Restaurant | Locations Toronto | Call (416) 901-6768`}
          title={`Lobby Bar Restaurant | Locations Toronto | Call (416) 901-6768`}
          href='tel:4169016768'
          className='font-bold hover:text-[var(--main-text-color)] w-fit mx-auto duration-[var(--main-duration)]'
        >
          (416) 901-6768
        </a>
      </div>
    </div>
  );
};

export default ContactInformationToronto;
