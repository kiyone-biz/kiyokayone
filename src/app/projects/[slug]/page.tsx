import Section from '@/components/Section';
import { siteConfig } from '@/config/siteConfig';
import { getAllProjects } from '@/data/projects';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

// ✅ メタデータ関数
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
  return (
    <section className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='text-3xl font-bold mb-4'>{project.title}</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt={project.title}
        className='w-full max-w-2xl mx-auto mb-6 rounded'
      />
      <p className='mb-4'>{project.description}</p>

      <Section title='業務内容' items={project.details} />
      <Section title='実績・工夫' items={project.achievements} />
      <Section
        title='使用技術'
        items={[
          ...project.technologies.languages,
          ...project.technologies.libraries,
        ]}
      />

      <div className='space-x-4'>
        {project.site && (
          <a
            href={project.site}
            className='inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
            target='_blank'
            rel='noopener noreferrer'
          >
            サイトを見る
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            className='text-blue-600 underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        )}
      </div>
    </section>
  );
}
