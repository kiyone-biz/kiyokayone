import { siteConfig } from '@/config/siteConfig';
import ContactForm from '@/features/contact/ContactForm';

export const metadata = {
  title: `お問い合わせ - ${siteConfig.siteTitle}`,
  description: 'Get in touch with me.',
};

export default function Page() {
  return (
    <section className='container mx-auto px-4 py-8 max-w-xl'>
      <h1 className='text-3xl font-bold mb-4'>お問い合わせ</h1>
      <ContactForm />
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-2'>連絡先</h2>
        <p className='mb-1'>
          Email:{' '}
          <a
            href='mailto:kiyoka.yone.biz@gmail.com'
            className='text-blue-600 underline'
          >
            kiyoka.yone.biz@gmail.com
          </a>
        </p>
        <p className='mb-1'>
          GitHub:{' '}
          <a
            href='https://github.com/kiyone-biz'
            className='text-blue-600 underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            github.com/kiyone-biz
          </a>
        </p>
        {/* <p className='mb-1'>
          LinkedIn:{' '}
          <a
            href='https://linkedin.com/in/yourusername'
            className='text-blue-600 underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            linkedin.com/in/yourusername
          </a>
        </p> */}
      </div>
    </section>
  );
}
