import TorontoHeaderImage from './TorontoHeaderImage';
import ContactInformationToronto from '@/src/app/locations/toronto/ContactInformationToronto';
import LinksToronto from '@/src/app/locations/toronto/LinksToronto';
import MapContainerToronto from '@/src/app/locations/toronto/MapContainerToronto';
import MenuCarousel from '@/src/components/reusable/MenuCarousel';
import TorontoHoursContainer from './TorontoHoursContainer';

const locationsToronto = () => {
  const componentName = 'LOCATIONS_TORONTO';
  return (
    <div className={`${componentName}_MAIN_CONTAINER relative`}>
      <TorontoHeaderImage componentName={componentName} />
      <div
        className={`${componentName}_CONTENT_CONTAINER relative grid md:grid-cols-2 p-4`}
      >
        <div
          className={`${componentName}_CONTACT_LINKS_MAP_CONTAINER relative top-[-120px] flex flex-col justify-center items-center gap-4 pt-8 h-fit`}
        >
          <ContactInformationToronto componentName={componentName} />
          <LinksToronto componentName={componentName} />
          <MapContainerToronto componentName={componentName} />
        </div>
        <div
          className={`${componentName}_HOURS_CONTAINER h-[calc(100%-100px)]`}
        >
          <TorontoHoursContainer />
        </div>
      </div>
      <MenuCarousel />
    </div>
  );
};

export default locationsToronto;
