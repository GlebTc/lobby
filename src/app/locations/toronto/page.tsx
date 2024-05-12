import HeaderImage from '../HeaderImage';
import ContactInformationToronto from '@/src/app/locations/toronto/ContactInformationToronto';
import LinksToronto from '@/src/app/locations/toronto/LinksToronto';
import MapContainerToronto from '@/src/app/locations/toronto/MapContainerToronto';
import HoursContainer from '../HoursContainer';
import MainGallery from '@/src/components/main/MainGallery';

const locationsToronto = () => {
  const componentName = 'LOCATIONS_TORONTO';
  return (
    <div className={`${componentName}_MAIN_CONTAINER relative`}>
      <HeaderImage componentName={componentName} />
      <div
        className={`${componentName}_CONTENT_CONTAINER relative grid md:grid-cols-2 p-4`}
      >
        <div
          className={`${componentName}_CONTACT_LINKS_MAP_CONTAINER relative top-[-80px] flex flex-col justify-center items-center gap-4 pt-8 h-fit`}
        >
          <ContactInformationToronto componentName={componentName} />
          <LinksToronto componentName={componentName} />
          <MapContainerToronto componentName={componentName} />
        </div>
        <div
          className={`${componentName}_HOURS_CONTAINER h-[calc(100%-100px)]`}
        >
          <HoursContainer componentName={componentName} location="Toronto"/>
        </div>
      </div>
      <MainGallery />
    </div>
  );
};

export default locationsToronto;
