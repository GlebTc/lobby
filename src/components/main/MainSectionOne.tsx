import Image from 'next/image';
import main_section_one_img_smaller from '@/public/assets/main_section_one_img_smaller.webp';

const MainSectionOne = () => {
  const componentName = 'MAIN_SECTION_ONE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-fit grid md:grid-cols-2 md:py-8 lg:px-4 md:p-4`}
    >
      <div
        className={`${componentName}_IMG_CONTAINER h-full flex items-center`}
      >
        <div className='relative h-[40vh] w-full'>
          <Image
            src={main_section_one_img_smaller}
            alt={`Lobby Bar Restaurant | Main Page | Lobby Cappucino Image`}
            title={`Lobby Bar Restaurant | Main Page | Lobby Cappucino Image`}
            fill
            sizes='1'
            className='floating_container object-cover'
            // placeholder='blur'
            priority
            quality={10}
          />
        </div>
      </div>
      <div
        className={`${componentName}_CONTENT_CONTAINER flex flex-col items-center justify-center gap-8 h-full p-4 lg:p-12 text-center sm:min-h-[331px]`}
      >
        <div
          className={`${componentName}_HEADINGS_CONTAINER text-3xl font-[700] tracking-widest flex flex-col items-center`}
        >
          <h2>Global Flavors</h2>
          <h2>Unforgetable Moments</h2>
        </div>
        <p>
          At Lobby, we currate a journey of global flavors, paired with
          handcrafted coctails and an inviting atmosphere that transforms dining
          into an experience.
        </p>
        <a
          href='/menus'
          className={`${componentName}_VIEW_MENU_BUTTON main_button`}
          aria-label={`Lobby Bar Restaurant | Main Page | Section One | View Menu Button`}
          title={`Lobby Bar Restaurant | Main Page | Section One | View Menu Button`}
        >
          view menu
        </a>
      </div>
    </div>
  );
};

export default MainSectionOne;
