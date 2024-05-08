import Link from 'next/link';
import Image from 'next/image';

import private_events_hamilton_two from '@/public/assets/private_events_hamilton_two.webp';

const HamiltonSlideInButton = ({
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
      href={`/${href}/hamilton`}
      className='text-lg font-[700] px-2 py-1  text-white border-[1px] border-[var(--main-bg-color)] w-[98dvw] md:w-[70dvw] lg:w-[60dvw] mx-auto h-full flex flex-col gap-4 justify-center items-center rounded-lg relative group shadow-lg shadow-[var(--main-text-color)]'
    >
      <div
        className={`${componentName}_HAMILTON_IMAGE_OVERLAY absolute top-0 left-0 w-full h-full bg-gray-900/70 z-[-1] group-hover:bg-gray-900/10 duration-[var(--main-duration)] rounded-lg`}
      ></div>
      <Image
        src={private_events_hamilton_two}
        alt={`${title} Hamilton`}
        title={`${title} Hamilton`}
        fill
        className='object-cover z-[-2] rounded-lg'
        quality={10}
        priority
        sizes='auto'
      />
      <h1>Hamilton</h1>
      <p className='text-white'>151 James St S, Hamilton, ON L8P 2Z5</p>
      <p className='text-white'>(289) 389-3109</p>
    </Link>
  );
};

export default HamiltonSlideInButton;