import HamiltonHeaderImage from '../hamilton/HamiltonHeaderImage';
import ContactInformationHamilton from './ContactInformationHamilton';
import LinksHamilton from '@/src/app/locations/hamilton/LinksHamilton';
import MapContainerHamilton from '@/src/app/locations//hamilton/MapContainerHamilton';
import MainGallery from '@/src/components/main/MainGallery';
import HamiltonHoursContainer from './HamiltonHoursContainer';

const locationsHamilton = () => {
  const componentName = 'LOCATIONS_HAMILTON';
  return (
    <div className={`${componentName}_MAIN_CONTAINER relative`}>
      <HamiltonHeaderImage componentName={componentName} />
      <div
        className={`${componentName}_CONTENT_CONTAINER relative grid md:grid-cols-2 p-4`}
      >
        <div
          className={`${componentName}_CONTACT_LINKS_MAP_CONTAINER relative top-[-120px] flex flex-col justify-center items-center gap-4 pt-8 h-fit`}
        >
          <ContactInformationHamilton componentName={componentName} />
          <LinksHamilton componentName={componentName} />
          <MapContainerHamilton componentName={componentName} />
        </div>
        <div
          className={`${componentName}_HOURS_CONTAINER h-[calc(100%-100px)]`}
        >
          <HamiltonHoursContainer />
        </div>
      </div>
      <MainGallery />
    </div>
  );
};

export default locationsHamilton;
