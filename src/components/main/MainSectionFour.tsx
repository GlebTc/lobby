import Image from 'next/image';
import main_section_four_img from '@/public/assets/main_section_four_img.webp';
import main_section_four_img_two from '@/public/assets/main_section_four_img_two.webp';

const MainSectionFour = () => {
  const componentName = 'MAIN_SECTION_FOUR';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-fit grid md:grid-cols-2 md:my-8 md:mx-4`}
    >
      <div
        className={`${componentName}_EXPLORE_MENU_ONE_CONTAINER p-4 flex flex-col justify-start items-center gap-4`}
      >
        <div className='relative floating_container_all h-[50dvh] w-[80dvw] md:w-[40dvw]  rounded-lg'>
          <Image
            src={main_section_four_img}
            alt={`Lobby Bar Restaurant | Main Page | Section Four | Indulge in Weekend Bliss Image`}
            title={`Lobby Bar Restaurant | Main Page | Section Four | Indulge in Weekend Bliss Image`}
            fill
            sizes='1'
            className='object-cover rounded-lg'
            placeholder='blur'
            priority
            quality={10}
          />
        </div>
        <div
          className={`${componentName}_HEADINGS_CONTAINER text-3xl font-[700] tracking-widest flex flex-col items-center text-center`}
        >
          <h2>Indulge in Weekend Bliss</h2>
        </div>
        <p>
          Brunch like never before. From classics to innovative creations, our
          menu is a celebration of weekend indulgence
        </p>
        <a
          href='/menus'
          className={`${componentName}_VIEW_MENU_BUTTON main_button text-center`}
          aria-label={`Lobby Bar Restaurant | Main Page | Section Four | Indulge in Weekend Bliss | View Menu Button`}
          title={`Lobby Bar Restaurant | Main Page | Section Four | Indulge in Weekend Bliss | View Menu Button`}
        >
          view menu
        </a>
      </div>
      <div
        className={`${componentName}_EXPLORE_MENU_TWO_CONTAINER p-4 flex flex-col justify-center items-center gap-4`}
      >
        <div className='relative floating_container_all h-[50dvh] w-[80dvw] md:w-[40dvw] rounded-lg'>
          <Image
            src={main_section_four_img_two}
            alt={`Lobby Bar Restaurant | Main Page | Section Four | Elegance Meets Expereience Image`}
            title={`Lobby Bar Restaurant | Main Page | Section Four | Elegance Meets Expereience Image`}
            fill
            sizes='1'
            className='object-cover rounded-lg'
            placeholder='blur'
            priority
            quality={10}
          />
        </div>
        <div
          className={`${componentName}_HEADINGS_CONTAINER text-3xl font-[700] tracking-widest flex flex-col items-center text-center`}
        >
          <h2>Elegance Meets Excellence</h2>
        </div>
        <p>
          As the sun sets, join us for a dinner that transcends the ordinary.
          Immerse yourself in an evening of culinary delight and sophisticated
          ambiance.
        </p>
        <a
          href='/menus'
          className={`${componentName}_VIEW_MENU_BUTTON main_button text-center`}
          aria-label={`Lobby Bar Restaurant | Main Page | Section Four | Elegance Meets Excellence | View Menu Button`}
          title={`Lobby Bar Restaurant | Main Page | Section Four | Elegance Meets Excellence | View Menu Button`}
        >
          view menu
        </a>
      </div>
    </div>
  );
};

export default MainSectionFour;
