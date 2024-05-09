import React from 'react'

const ContactInformation = ({componentName}:{componentName: string}) => {
  return (
    <div
    className={`${componentName}_CONTACT_INFORMATION_CONTENT_CONTAINER bg-[var(--main-bg-color)] w-full flex flex-col justify-center items-center gap-4 text-center py-8 uppercase rounded-lg shadow-lg shadow-gray-500`}
  >
    <h1>Toronto</h1>
    <a
      href='/reservations'
      className='main_button mb-4 animate-bounce'
    >
      Reserve Now
    </a>
    <div className='flex flex-col gap-2'>
      <p>1032 QUEEN ST WEST TORONTO, ON M6J 1H7</p>
      <p>(416) 901-6768</p>
    </div>
  </div>
  )
}

export default ContactInformation