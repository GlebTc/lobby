import location_hamilton_header_image from '@/public/assets/location_hamilton_header_image.webp'
import Image from 'next/image';

const HamiltonHeaderImage = ({componentName}:{componentName: string}) => {
  return (
    <div className={`${componentName}_IMAGE_CONTAINER relative h-[25dvh]`}>
    <Image
      src={location_hamilton_header_image}
      alt={`Lobby Bar Restaurant | Locations Page | Lobby Cappucino Image`}
      title={`Lobby Bar Restaurant | Locations Page | Lobby Cappucino Image`}
      fill
      className='object-cover'
      quality={100}
    />
  </div>
  )
}

export default HamiltonHeaderImage