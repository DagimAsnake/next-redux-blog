import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className="box-border flex flex-col min-h-screen p-0 m-0 font-sans">
        <NavBar />
        <main className='flex-grow bg-slate-100'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
