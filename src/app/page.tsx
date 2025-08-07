import { siteConfig } from '@/config/siteConfig';

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
      <div className='flex space-x-4'>
        <a
          href='/projects'
          className='px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
        >
          開発実績を見る
        </a>
        <a
          href='/contact'
          className='px-6 py-3 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors'
        >
          お問い合わせ
        </a>
      </div>
    </section>
  );
}
