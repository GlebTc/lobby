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
        className={`${componentName}_EXPLORE_MENU_ONE_CONTAINER p-8 flex flex-col justify-start items-center gap-4`}
      >
        <Image
          src={main_section_four_img}
          alt='Main Hero Menu Image Four'
          className='floating_container_all'
          placeholder='blur'
          priority
          width={700}
          height={700}
          quality={10}
        />

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
          className={`${componentName}_NAVBAR_RESERVATION_BUTTON main_button`}
        >
          explore menu
        </a>
      </div>
      <div
        className={`${componentName}_EXPLORE_MENU_TWO_CONTAINER p-8 flex flex-col justify-center items-center gap-4`}
      >
        <Image
          src={main_section_four_img_two}
          alt='Main Hero Menu Image Four'
          className='floating_container_all'
          placeholder='blur'
          priority
          width={700}
          height={700}
          quality={10}
        />
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
          className={`${componentName}_NAVBAR_RESERVATION_BUTTON main_button`}
        >
          explore menu
        </a>
      </div>
    </div>
  );
};

export default MainSectionFour;
