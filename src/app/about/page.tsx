import { siteConfig } from '@/config/siteConfig';

export const metadata = {
  title: `プロフィール - ${siteConfig.siteTitle}`,
  description: 'Learn more about me and my background.',
};
export default function AboutPage() {
  return (
    <section className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='text-3xl font-bold mb-4'>米 希世香</h1>
      <p className='mb-4'>
        はじめまして。
        <br />
        フロントエンドエンジニア兼Webデザイナーの米 希世香です。
        <br />
        React / Next.js /
        TypeScriptを用いたスピード感ある開発を得意としており、デザインから実装、UI改善まで一貫して対応可能です。
        <br />
        バックエンドではWordPressやLaravelなどの経験があります。
        <br />
        また、FigmaによるUI設計やユーザビリティを意識したデザイン提案も行っており、「見た目だけでなく、使いやすさにもこだわる開発」を大切にしています。
        <br />
        コミュニケーション力や柔軟な対応力にも定評があり、社内表彰をいただいた経験もあります。
        <br />
        仕事以外の時間は、趣味の和太鼓、家族や友人との時間を大切にしています。
      </p>
      <h1>スキル</h1>
      <p className='mb-4'>
        フロントエンド：React / Next.js / TypeScript / JavaScript / HTML / CSS /
        <br />
        バックエンド：PHP / Node.js / WordPress
        <br />
        デザイン：Figma / Adobe XD
        <br />
        強み：フロントエンド ＋ Webデザイン、スピード感、コミュニケーション
        <br />
        表彰歴：前職でコミュニケーション賞・発表会優秀賞3度受賞経験あり
      </p>
    </section>
  );
}
