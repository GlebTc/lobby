import MainHeroVideo from '@/src/components/main/MainHeroVideo';
import MainSectionOne from '../components/main/MainSectionOne';
import MainSectionTwo from '../components/main/MainSectionTwo';
import MainSectionThree from '../components/main/MainSectionThree';
import MainGallery from '../components/main/MainGallery';
import MainSectionFour from '../components/main/MainSectionFour';

export default function Home() {
  return (
    <main>
      <MainHeroVideo />
      <MainSectionOne />
      <MainSectionTwo />
      <MainSectionThree />
      <MainGallery />
      <MainSectionFour />
    </main>
  );
}
