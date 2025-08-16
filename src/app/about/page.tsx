import { siteConfig } from '@/config/siteConfig';

export const metadata = {
  title: `プロフィール - ${siteConfig.siteTitle}`,
  description: 'フロントエンドエンジニア兼Webデザイナーの米 希世香のプロフィールページです。',
};

export default function AboutPage() {
  return (
    <section className='container mx-auto px-4 py-8 max-w-4xl'>
      {/* Hero Section */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold font-display mb-4 text-neutral-900 dark:text-neutral-100'>
          米 希世香
        </h1>
        <p className='text-xl text-neutral-600 dark:text-neutral-300 mb-6'>
          Frontend Engineer & Web Designer
        </p>
        <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full'></div>
      </div>

      {/* Introduction */}
      <div className='card mb-8 p-8'>
        <h2 className='text-2xl font-bold font-display text-neutral-900 dark:text-neutral-100 mb-6'>
          はじめまして
        </h2>
        <div className='space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed'>
          <p>
            フロントエンドエンジニア兼Webデザイナーとして、React / Next.js / TypeScriptを用いたスピード感ある開発を得意としています。
            デザインから実装、UI改善まで一貫して対応可能で、「見た目だけでなく、使いやすさにもこだわる開発」を大切にしています。
          </p>
          <p>
            バックエンドではWordPressやLaravelなどの経験があり、FigmaによるUI設計やユーザビリティを意識したデザイン提案も行っています。
            コミュニケーション力や柔軟な対応力にも定評があり、社内表彰をいただいた経験もあります。
          </p>
          <p>
            仕事以外の時間は、趣味の和太鼓、家族や友人との時間を大切にしています。
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className='card p-8'>
        <h2 className='text-2xl font-bold font-display text-neutral-900 dark:text-neutral-100 mb-8'>
          スキル & 経験
        </h2>
        
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Frontend */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-neutral-800 dark:text-neutral-200 flex items-center mb-4'>
              <span className='w-3 h-3 bg-primary-500 rounded-full mr-3'></span>
              フロントエンド
            </h3>
            <div className='flex flex-wrap gap-2'>
              {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'].map((skill) => (
                <span key={skill} className='text-xs font-medium px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-md'>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-neutral-800 dark:text-neutral-200 flex items-center mb-4'>
              <span className='w-3 h-3 bg-primary-500 rounded-full mr-3'></span>
              バックエンド
            </h3>
            <div className='flex flex-wrap gap-2'>
              {['PHP', 'Node.js', 'WordPress', 'Laravel'].map((skill) => (
                <span key={skill} className='text-xs font-medium px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-md'>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Design */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-neutral-800 dark:text-neutral-200 flex items-center mb-4'>
              <span className='w-3 h-3 bg-accent-500 rounded-full mr-3'></span>
              デザイン
            </h3>
            <div className='flex flex-wrap gap-2'>
              {['Figma', 'Adobe XD', 'UI/UX Design'].map((skill) => (
                <span key={skill} className='text-xs font-medium px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-md'>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-neutral-800 dark:text-neutral-200 flex items-center mb-4'>
              <span className='w-3 h-3 bg-orange-500 rounded-full mr-3'></span>
              強み
            </h3>
            <div className='space-y-2 text-neutral-600 dark:text-neutral-300'>
              <p>フロントエンド + Webデザイン</p>
              <p>スピード感のある開発</p>
              <p>コミュニケーション力</p>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className='mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl border border-primary-100 dark:border-primary-800'>
          <h3 className='text-lg font-semibold text-neutral-800 dark:text-neutral-200 flex items-center mb-3'>
            <svg className='w-5 h-5 text-primary-600 mr-3' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
            </svg>
            表彰歴
          </h3>
          <p className='text-neutral-600 dark:text-neutral-300'>
            前職でコミュニケーション賞・発表会優秀賞を3度受賞
          </p>
        </div>
      </div>
    </section>
  );
}
