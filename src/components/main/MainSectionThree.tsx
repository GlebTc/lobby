import Image from 'next/image';
import main_section_three_img from '@/public/assets/main_section_three_img.webp';

const MainSectionThree = () => {
  const componentName = 'MAIN_SECTION_THREE';
  return (
    <div>
      <div
        className={`${componentName}_MAIN_CONTAINER h-fit grid md:grid-cols-2 md:py-8 lg:px-4 md:p-4`}
      >
        <div
          className={`${componentName}_IMG_CONTAINER h-full flex items-center order-2`}
        >
          <div className='relative h-[40vh] w-full'>
            <Image
              src={main_section_three_img}
              alt={`Lobby Bar Restaurant | Main Page | Savor Flavor in Two Cities Image`}
              title={`Lobby Bar Restaurant | Main Page | Savor Flavor in Two Cities Image`}
              fill
              sizes='1'
              className='floating_container object-cover'
              placeholder='blur'
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
            <h2 className='text-center'>Savor Flavor in Two Cities</h2>
          </div>
          <p className='text-center'>
            Experience our distinctive ambience and flavors in both Hamilton and
            Toronto. Our commitment to excellence transcends locations, offering
            you the same exceptional dining and nightlife in two vibrant
            destinations.
          </p>
          <a
            href='/menus'
            className={`${componentName}_VIEW_MENU_BUTTON main_button`}
            aria-label={`Lobby Bar Restaurant | Main Page | Section Three | View Menu Button`}
            title={`Lobby Bar Restaurant | Main Page | Section Three | View Menu Button`}
          >
            view menu
          </a>
        </div>
      </div>
      <div
        className={`${componentName}_SECOND_SECTION_DELICIOUS h-full flex flex-col justify-center items-center text-center gap-8 p-4 bg-[var(--main-bg-color)]`}
      >
        <div
          className={`${componentName}_HEADINGS_CONTAINER tracking-widest flex flex-col items-center`}
        >
          <h2>Delicious Culinary Masterpieces</h2>
        </div>
        <p>
          Explore a carousel of flavors. Our menu is a symphony of culinary
          masterpieces designed to elevate your dining experience.
        </p>
        <a
          href='/menus'
          className={`${componentName}_VIEW_MENU_BUTTON main_button`}
          aria-label={`Lobby Bar Restaurant | Main Page | Section Three | Deliecious Culinary Masterpieces | View Menu Button`}
          title={`Lobby Bar Restaurant | Main Page | Section Three | Deliecious Culinary Masterpieces | View Menu Button`}
        >
          view menu
        </a>
      </div>
    </div>
  );
};

export default MainSectionThree;
