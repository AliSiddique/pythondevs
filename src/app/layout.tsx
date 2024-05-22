import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from '@/components/Google/GoogleAnlaytics';
import Script from 'next/script';
import { config } from '../../config';
import { Toaster } from 'sonner';
import SessionProviderContext from '@/components/SessionProvider';
import Navbar from '@/components/Constants/Navbar';
import Footer from '@/components/Constants/Footer';
import QueryWrapper from '@/components/QueryLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: `%s | ${config.title}`,
    default: config.title, // a default is required when creating a template
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: '/findmyaccomlogo.png',
    shortcut: '/findmyaccomlogo.png',
    apple: '/findmyaccomlogo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/findmyaccomlogo.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <GoogleAnalytics GA_TRACKING_ID='G-QBGVP87LL9' />
        <meta
          name='google-site-verification'
          content='-oXITjYx18nHZ0Z_T2DzIYnZYSQq_HETHLc5E6bsLAk'
        />
        {/* <Script src="/chatbot/crisp.js" /> */}
      </head>
      <body className={inter.className}>
        <QueryWrapper>
        <Toaster position='top-right' />
          <Navbar  />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
