import { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

export const HeaderBold: NextFont = localFont({
  src: '../../../public/fonts/static-fonts/Stacion-Regular.otf',
  display: 'swap',
});

export const HeaderRegular: NextFont = localFont({
  src: '../../../public/fonts/static-fonts/Stacion-Light.otf',
  display: 'swap',
});

export const BodyMedium = localFont({
  src: '../../../public/fonts/static-fonts/TerminaTest-Medium.otf',
  display: 'swap',
});

export const BodyRegular = localFont({
  src: '../../../public/fonts/static-fonts/TerminaTest-Regular.otf',
  display: 'swap',
});
