import lobby_image from '@/public/assets/main_section_one_img.webp';
import Image from 'next/image';

const TorontoHeaderImage = ({componentName}:{componentName: string}) => {
  return (
    <div className={`${componentName}_IMAGE_CONTAINER relative h-[25dvh]`}>
    <Image
      src={lobby_image}
      alt={`Lobby Bar Restaurant | Locations Page | Lobby Cappucino Image`}
      title={`Lobby Bar Restaurant | Locations Page | Lobby Cappucino Image`}
      fill
      className='object-cover'
      quality={100}
    />
  </div>
  )
}

export default TorontoHeaderImage