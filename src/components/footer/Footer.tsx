import React from 'react'

const Footer = () => {
    const componentName = 'FOOTER';
    const currentYear = new Date().getFullYear();
  return (
    <div className={`${componentName}_MAIN_CONTAINER w-full h-[5vh] flex justify-center items-center my-8`}>
        <div className='text-[12px]'>
            © {currentYear} Lobby. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer