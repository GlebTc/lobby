import HeaderImage from './HeaderImage';
import ContactInformation from './ContactInformation';
import Links from './Links';

const locationsToronto = () => {
  const componentName = 'LOCATIONS_TORONTO';
  return (
    <div className={`${componentName}_MAIN_CONTAINER relative`}>
      <HeaderImage componentName={componentName} />
      <div
        className={`${componentName}_CONTENT_CONTAINER relative grid md:grid-cols-2`}
      >
        <div
          className={`${componentName}_CONTACT_LINKS_MAP_CONTAINER relative top-[-80px] flex flex-col justify-center items-center gap-4 p-8`}
        >
          <ContactInformation componentName={componentName} />
          <Links componentName={componentName} />
        </div>
        <div>Hours</div>
      </div>
    </div>
  );
};

export default locationsToronto;
