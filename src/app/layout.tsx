import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavbarTopBar from '@/src/components/navbar/NavbarTopBar';
import Navbar from '@/src/components/navbar/Navbar';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lobby Bar Restaurant',
  description: 'Lobby Bar Restaurant',
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
        <nav className='sticky top-0 z-[10]'>
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  );
}
