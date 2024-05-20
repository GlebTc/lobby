import MainHeroVideo from '@/src/components/main/MainHeroVideo';
import MainSectionOne from '../components/main/MainSectionOne';
import MainSectionTwo from '../components/main/MainSectionTwo';
import MainSectionThree from '../components/main/MainSectionThree';
import MenuCarousel from '@/src/components/reusable/MenuCarousel';
import MainSectionFour from '../components/main/MainSectionFour';

export default function Home() {
  return (
    <main>
      <MainHeroVideo />
      <MainSectionOne />
      <MainSectionTwo />
      <MainSectionThree />
      <MenuCarousel />
      <MainSectionFour />
    </main>
  );
}
