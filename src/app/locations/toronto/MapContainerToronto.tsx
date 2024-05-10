import React from 'react';

const MapContainerToronto = ({ componentName }: { componentName: string }) => {
  return (
    <div
      className={`${componentName}_MAP_CONTAINER overflow-hidden w-full h-[30dvh] sm:h-[40dvh] md:max-w-[1200px] rounded-lg shadow-lg shadow-gray-500 relative`}
    >
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4392.39808553138!2d-79.42310459237912!3d43.64434607099096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3596ea591b91%3A0x6103c65c552704b!2slobby!5e0!3m2!1sen!2sca!4v1715343641016!5m2!1sen!2sca'
        loading='lazy'
        className='object-fill w-full h-full'
      ></iframe>
    </div>
  );
};

export default MapContainerToronto;
