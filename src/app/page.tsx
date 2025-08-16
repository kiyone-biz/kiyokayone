import { siteConfig } from '@/config/siteConfig';
import Link from 'next/link';

export const metadata = {
  title: `ホーム - ${siteConfig.siteTitle}`,
  description: 'Welcome to my personal portfolio website.',
};

export default function HomePage() {
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white/90 to-accent-50/80 dark:from-neutral-900/90 dark:via-neutral-900/95 dark:to-neutral-800/90'></div>
      
      {/* Floating elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/20 dark:bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000'></div>
        <div className='absolute top-1/2 right-1/3 w-32 h-32 bg-primary-300/30 dark:bg-primary-400/20 rounded-full blur-2xl animate-bounce-slow'></div>
      </div>

      {/* Main content */}
      <section className='relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center'>
        {/* Hero heading */}
        <div className='animate-slide-up'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 text-balance'>
            <span className='block text-neutral-900 dark:text-neutral-100'>
              使う人に
            </span>
            <span className='block text-gradient bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent animate-gradient'>
              やさしい、
            </span>
            <span className='block text-neutral-900 dark:text-neutral-100'>
              機能するWebを。
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className='animate-slide-up delay-150'>
          <p className='text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-12 max-w-4xl font-medium leading-relaxed'>
            フロントエンドからデザインまで、
            <br className='hidden sm:block' />
            スピード感をもって開発します。
          </p>
        </div>

        {/* CTA Buttons */}
        <div className='animate-slide-up delay-300'>
          <div className='flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center'>
            <Link
              href='/projects'
              className='btn btn-primary text-lg px-8 py-4 group'
              role='button'
              aria-label='開発実績ページを見る'
            >
              <span className='relative z-10'>開発実績を見る</span>
              <svg 
                className='ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1' 
                fill='none' 
                stroke='currentColor' 
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </Link>
            
            <Link
              href='/contact'
              className='btn btn-secondary text-lg px-8 py-4 group'
              role='button'
              aria-label='お問い合わせページへ移動'
            >
              <span className='relative z-10'>お問い合わせ</span>
              <svg 
                className='ml-2 w-5 h-5 transition-transform duration-200 group-hover:scale-110' 
                fill='none' 
                stroke='currentColor' 
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='w-6 h-10 border-2 border-neutral-300 dark:border-neutral-600 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2 animate-pulse'></div>
          </div>
        </div>
      </section>
    </div>
  );
}
