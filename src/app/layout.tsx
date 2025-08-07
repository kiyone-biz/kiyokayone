import type { Metadata } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kiyoka Yone',
  description: 'Web開発・Webデザインの実績を紹介するポートフォリオサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja' className='dark' suppressHydrationWarning>
      <body className='bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 flex flex-col min-h-screen'>
        {/* Global header */}
        <Header />
        {/* Page content */}
        <main
          style={{
            backgroundImage: "url('/images/backimage.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='flex-grow'
        >
          {children}
        </main>
        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
