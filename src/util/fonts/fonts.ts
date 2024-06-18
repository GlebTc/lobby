import { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

export const HeaderBold: NextFont = localFont({
  src: '../../../public/fonts/static-fonts/Stacion-Regular.otf',
  display: 'swap',
});

export const HeaderRegular: NextFont = localFont({
  src: '../../../public/fonts/static-fonts/GlacialIndifference-Regular.otf',
  display: 'swap',
});

export const futuraFontMedium = localFont({
  src: '../../../public/fonts/static-fonts/FuturaPTMedium.otf',
  display: 'swap',
});

export const futuraFontBook = localFont({
  src: '../../../public/fonts/static-fonts/FuturaPTBook.otf',
  display: 'swap',
});
