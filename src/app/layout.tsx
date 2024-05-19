import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavbarTopBar from '@/src/components/navbar/NavbarTopBar';
import Navbar from '@/src/components/navbar/Navbar';
import LocationPicker from '@/src/components/reusable/LocationPicker';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lobby.ca/'),
  title: {
    default: 'Lobby Bar Restaurant',
    template: '%s | Lobby Bar Restaurant',
  },
  description: 'Lobby Bar Restaurant',
  twitter: {
    title: 'Lobby Bar Restaurant',
    card: 'summary_large_image',
    description: 'Lobby Bar Restaurant',
  },
  keywords: [
    'Toronto Bar',
    'Toronto Restaurant',
    'Toronto Pub',
    'Toronto Lounge',
    'Hamilton Bar',
    'Hamilton Restaurant',
    'Hamilton Pub',
    'Hamilton Lounge',
  ],
  creator: 'Web Development Hamilton | www.webdevelopmenthamilton.com',
  publisher: 'Web Development Hamilton | www.webdevelopmenthamilton.com',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} relative`}>
        <NavbarTopBar />
        <div className='sticky top-0 z-[10]'>

          <Navbar />
        </div>

        <div className='relative z-[10]'>
          <LocationPicker />
        </div>
        {children}
      </body>
    </html>
  );
}
