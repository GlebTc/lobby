import Link from 'next/link';
import Image from 'next/image';

import private_events_toronto_two from '@/public/assets/private_events_toronto_two.webp';

const TorontoSlideInButton = ({
  componentName,
  href,
  title,
}: {
  componentName: string;
  href: string;
  title: string;
}) => {
  return (
    <Link
      href={`/${href}/toronto`}
      className='text-lg font-[700] px-2 py-1  text-white border-[1px] border-[var(--main-bg-color)] w-[98dvw] md:w-[70dvw] lg:w-[60dvw] mx-auto h-full flex flex-col gap-4 justify-center items-center rounded-lg relative group shadow-md shadow-[var(--main-text-color)]'
      title={`${title} | Select Location | Toronto`}
      aria-label={`${title} | Select Location | Toronto`}
    >
      <div
        className={`${componentName}_TORONTO_IMAGE_OVERLAY absolute top-0 left-0 w-full h-full bg-gray-900/50 z-[-1] group-hover:bg-gray-900/0 duration-[var(--main-duration)] rounded-lg`}
      ></div>
      <Image
        src={private_events_toronto_two}
        title={`${title} | Select Location | Toronto Image`}
        alt={`${title} | Select Location | Toronto Image`}
        fill
        className='object-cover z-[-2] rounded-lg'
        quality={10}
        priority
        sizes='auto'
      />
      <h1>Toronto</h1>
      <p className='text-white'>1032 Queen St W, Toronto, ON M6J 1H7</p>
      <p className='text-white'>(416) 901-6768</p>
    </Link>
  );
};

export default TorontoSlideInButton;
