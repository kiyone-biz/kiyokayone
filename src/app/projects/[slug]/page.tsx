import ImageGallery from '@/components/ImageGallery';
import Section from '@/components/Section';
import { siteConfig } from '@/config/siteConfig';
import { getAllProjects } from '@/data/projects';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projects = await getAllProjects();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: '作品が見つかりません',
    };
  }

  return {
    title: `${project.title} - ${siteConfig.siteTitle}`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const projects = await getAllProjects();
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  const displayImages = project.images || [project.image];

  return (
    <div className='min-h-screen bg-white dark:bg-neutral-900'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 py-16'>
        <div className='container mx-auto px-6'>
          {/* Breadcrumb */}
          <nav className='flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400 mb-8'>
            <Link href='/projects' className='hover:text-primary-500 transition-colors'>
              プロジェクト一覧
            </Link>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
            <span className='text-neutral-900 dark:text-neutral-100'>{project.title}</span>
          </nav>

          {/* Header */}
          <div className='flex items-start justify-between mb-8'>
            <div className='max-w-4xl'>
              <div className='flex items-center gap-3 mb-4'>
                <span className={`
                  px-3 py-1 text-sm font-medium rounded-full
                  ${project.kind === 'programming' 
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' 
                    : 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300'
                  }
                `}>
                  {project.kind === 'programming' ? 'プログラミング' : 'デザイン'}
                </span>
              </div>
              
              <h1 className='text-4xl md:text-5xl font-bold font-display text-neutral-900 dark:text-neutral-100 mb-6 text-balance'>
                {project.title}
              </h1>
              
              <p className='text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl'>
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-6 py-12'>
        <div className='max-w-6xl mx-auto'>
          {/* Image Gallery */}
          <div className='mb-16'>
            <ImageGallery 
              images={displayImages} 
              alt={project.title}
              className='w-full'
            />
          </div>

          {/* Content Grid */}
          <div className='grid lg:grid-cols-3 gap-12'>
            {/* Main Content */}
            <div className='lg:col-span-2 space-y-12'>
              <Section title='業務内容' items={project.details} />
              <Section title='実績・工夫' items={project.achievements} />
            </div>

            {/* Sidebar */}
            <div className='lg:col-span-1 space-y-8'>
              {/* Technologies */}
              <div className='card p-6'>
                <h3 className='text-lg font-semibold font-display text-neutral-900 dark:text-neutral-100 mb-4'>
                  使用技術
                </h3>
                <div className='space-y-4'>
                  {project.technologies.languages.length > 0 && (
                    <div>
                      <h4 className='text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2'>
                        言語・フレームワーク
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {project.technologies.languages.map((tech) => (
                          <span
                            key={tech}
                            className='text-xs font-medium px-3 py-1 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.technologies.libraries.length > 0 && (
                    <div>
                      <h4 className='text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2'>
                        ライブラリ・ツール
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {project.technologies.libraries.map((tech) => (
                          <span
                            key={tech}
                            className='text-xs font-medium px-3 py-1 bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 rounded-full'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Links */}
              <div className='card p-6'>
                <h3 className='text-lg font-semibold font-display text-neutral-900 dark:text-neutral-100 mb-4'>
                  リンク
                </h3>
                <div className='space-y-3'>
                  {project.site && (
                    <a
                      href={project.site}
                      className='btn btn-primary w-full group'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span>サイトを見る</span>
                      <svg className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                      </svg>
                    </a>
                  )}
                  
                  {project.github && (
                    <a
                      href={project.github}
                      className='btn btn-secondary w-full group'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span>GitHub</span>
                      <svg className='ml-2 w-4 h-4 transition-transform group-hover:scale-110' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
