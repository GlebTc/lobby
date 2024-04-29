import Image from 'next/image';
import main_section_three_img from '@/public/assets/main_section_three_img.webp';

const MainSectionThree = () => {
  const componentName = 'MAIN_SECTION_THREE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-fit grid md:grid-cols-2 md:my-8 lg:mx-4 md:p-4`}
    >
      <div
        className={`${componentName}_IMG_CONTAINER h-full flex items-center order-2`}
      >
        <Image
          src={main_section_three_img}
          alt='Main Hero Menu Image Three'
          className='floating_container'
          placeholder='blur'
          priority
          width={700}
          height={700}
          quality={10}
        />
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
          href='#'
          className={`${componentName}_NAVBAR_RESERVATION_BUTTON uppercase font-[600] px-2 py-1 rounded-lg bg-[var(--main-text-color)] text-white border-[1px] border-[var(--main-text-color)] hover:bg-[var(--main-bg-color)] duration-[var(--main-duration)] hover:text-black`}
        >
          view menu
        </a>
      </div>
    </div>
  );
};

export default MainSectionThree;
