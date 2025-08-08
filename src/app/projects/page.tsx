import { siteConfig } from '@/config/siteConfig';
import { getAllProjects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export const metadata = {
  title: `開発実績 - ${siteConfig.siteTitle}`,
  description: 'A showcase of my work and projects.',
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  const programmingProjects = projects.filter(
    (project) => project.kind === 'programming'
  );
  const designProjects = projects.filter(
    (project) => project.kind === 'design'
  );

  return (
    <section className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>開発実績</h1>
      <h2 className='font-bold mb-6'>開発</h2>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {programmingProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <h2 className='font-bold  mt-6 mb-6'>デザイン</h2>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {designProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
