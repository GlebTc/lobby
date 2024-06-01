import React from 'react'

const Footer = () => {
    const componentName = 'FOOTER';
    const currentYear = new Date().getFullYear();
  return (
    <div className={`${componentName}_MAIN_CONTAINER w-full h-[5vh] flex justify-center items-center py-8 bg-white`}>
        <div className='text-[12px] uppercase'>
            © {currentYear} Lobby. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer