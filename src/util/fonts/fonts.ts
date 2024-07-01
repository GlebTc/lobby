import { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';
import { Roboto } from 'next/font/google'

export const HeaderBold: NextFont = localFont({
  src: '../../../public/fonts/static-fonts/GlacialIndifference-Bold.otf',
  display: 'swap',
});

export const HeaderRegular: NextFont = localFont({
  src: '../../../public/fonts/static-fonts/GlacialIndifference-Regular.otf',
  display: 'swap',
});

export const FuturaBoldCondesedBT: NextFont = localFont({
  src: '../../../public/fonts/static-fonts/futura-bold-condensed-bt.ttf',
  display: 'swap',
});

export const BodyMedium = localFont({
  src: '../../../public/fonts/static-fonts/futura-medium-bt.ttf',
  display: 'swap',
});

export const RobotoRegular = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ["300", "400", "500", "700"],
});
