import { notFound } from 'next/navigation';
import projects from '../../../data/projects';

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const metadata = {
  title: 'Project Details - My Portfolio',
};

export default function ProjectDetail({ params }: { params: Params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }
  return (
    <section className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='text-3xl font-bold mb-4'>{project!.title}</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project!.image}
        alt={project!.title}
        className='w-full max-w-2xl mx-auto mb-6 rounded'
      />
      <p className='mb-4'>{project!.description}</p>
      <h2 className='text-xl font-semibold mb-2'>業務内容</h2>
      <ul className='mb-4 list-disc list-inside'>
        {project!.details.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <h2 className='text-xl font-semibold mb-2'>実績・工夫</h2>
      <ul className='mb-4 list-disc list-inside'>
        {project!.achievements.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <h2 className='text-xl font-semibold mb-2'>使用技術</h2>
      <ul className='mb-4 list-disc list-inside'>
        {project!.technologies.languages.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
        {project!.technologies.libraries.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className='space-x-4'>
        {project!.site && (
          <a
            href={project!.site}
            className='inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
            target='_blank'
            rel='noopener noreferrer'
          >
            サイトを見る
          </a>
        )}
        {project!.github && (
          <a
            href={project!.github}
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
