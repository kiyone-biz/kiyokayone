import { siteConfig } from '@/config/siteConfig';
import Link from 'next/link';

export const metadata = {
  title: `ホーム - ${siteConfig.siteTitle}`,
  description: 'Welcome to my personal portfolio website.',
};

export default function HomePage() {
  return (
    <section className='container mx-auto px-4 py-16 flex flex-col items-center text-center'>
      <h1 className='text-4xl md:text-5xl font-extrabold mb-4'>
        使う人にやさしい、機能するWebを。
      </h1>
      <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl'>
        フロントエンドからデザインまで、スピード感をもって開発します。
      </p>
      <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
        <Link
          href='/projects'
          className='px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
          role='button'
          aria-label='開発実績ページを見る'
        >
          開発実績を見る
        </Link>
        <Link
          href='/contact'
          className='inline-block px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-lg font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 focus:outline-none transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
          role='button'
          aria-label='お問い合わせページへ移動'
        >
          お問い合わせ
        </Link>
      </div>
    </section>
  );
}
