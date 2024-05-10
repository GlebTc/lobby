
const ContactInformationToronto = ({componentName}:{componentName: string}) => {
  return (
    <div
    className={`${componentName}_CONTACT_INFORMATION_CONTENT_CONTAINER bg-[var(--main-bg-color)] w-[90%] flex flex-col justify-center items-center text-center py-2 uppercase rounded-lg shadow-lg shadow-gray-500`}
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
      <h3>(416) 901-6768</h3>
    </div>
  </div>
  )
}

export default ContactInformationToronto