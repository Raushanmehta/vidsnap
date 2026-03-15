import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://vidsnap.app'),
  title: 'VidSnap - Fast & Free Video Downloader | YouTube, Facebook, Instagram',
  description: 'VidSnap is the fastest tool to download videos from YouTube, Facebook, and Instagram in HD quality. No limits, 100% free and secure.',
  keywords: 'video downloader, youtube downloader, facebook downloader, instagram downloader, download reels, save video online, vidsnap',
  openGraph: {
    title: 'VidSnap - High Quality Video Downloader',
    description: 'Download videos from your favorite social platforms instantly with VidSnap.',
    url: 'https://vidsnap.app',
    siteName: 'VidSnap',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
