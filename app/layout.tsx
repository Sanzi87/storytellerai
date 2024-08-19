import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
