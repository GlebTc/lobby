const MapContainerHamilton = ({ componentName }: { componentName: string }) => {
  return (
    <div
      className={`${componentName}_MAP_CONTAINER overflow-hidden w-full h-[35dvh] sm:h-[35dvh] md:max-w-[1200px] relative`}
    >
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.9554692516967!2d-79.87340822343756!3d43.252355078263385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9bd7449dc67f%3A0x30d1a147eb49173b!2slobby%20Hamilton!5e0!3m2!1sen!2sca!4v1714766257190!5m2!1sen!2sca'
        loading='lazy'
        className='object-fill w-full h-full'
        title='Lobby Bar Restaurant | Hamilton | Map Location'
        aria-label='Lobby Bar Restaurant | Hamilton | Map Location'
      ></iframe>
    </div>
  );
};

export default MapContainerHamilton;
