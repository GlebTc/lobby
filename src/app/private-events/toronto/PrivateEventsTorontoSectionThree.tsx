import Image from 'next/image';
import private_events_toronto_four from '@/public/assets/gallery/gallery_img_07.webp';


const PrivateEventsTorontoSectionThree = () => {
  const componentName = 'PRIVATE_EVENTS_TORONTO_SECTION_THREE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER grid md:grid-cols-2 h-full`}
    >
      <div className={`${componentName}_MAIN_CONTENT_CONTAINER md:order-2 p-4`}>
        <h1 className='pb-4'>Food & Beverage</h1>

        <p className='mb-4'>
          Indulge in a culinary journey at Lobby Toronto, where our menu
          tantalizes your taste buds with bold flavors and vibrant ingredients.
          Complemented by elevated cocktail creations, tasteful beer selections,
          and an elegant wine list, our food and beverage offerings are
          carefully curated to provide a sophisticated and memorable dining
          experience in the heart of Queen West.
        </p>
      </div>
      <div
        className={`${componentName}_IMAGE_CONTAINER h-full flex items-center md:p-4`}
      >
        <div className='relative h-[40dvh] w-full'>
          <Image
            src={private_events_toronto_four}
            alt='Private Events Toronto'
            fill
            className='object-cover floating_container'
            quality={10}
          />
        </div>
      </div>
    </div>
  );
};

export default PrivateEventsTorontoSectionThree;
