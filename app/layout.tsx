import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Storyteller AI',
  description: 'Storyteller AI app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <Header />
        {children}
      </body>
    </html>
  );
}
