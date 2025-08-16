import './globals.css';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ThemeProviderWrapper from '../components/ThemeProviderWrapper';
import { Navbar } from '../components/Navbar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </head>
      <body className={`${poppins.className} font-poppins bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden`}>
        <ThemeProviderWrapper>
          <Navbar />
          <div className="pt-20">
            {children}
          </div>
          <Analytics />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
