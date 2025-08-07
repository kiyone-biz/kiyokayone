import Link from 'next/link';
import projects from '../../data/projects';

export default function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Link
      key={project.slug}
      href={`/projects/${project.slug}`}
      className='group block rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow'
    >
      <div className='relative'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-40 object-cover'
        />
      </div>
      <div className='p-4'>
        <h3 className='text-xl font-semibold mb-2 group-hover:underline'>
          {project.title}
        </h3>
        <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
          {project.description}
        </p>
        <div className='mt-2 flex flex-wrap gap-2'>
          {project.technologies.languages.map((tech) => (
            <span
              key={tech}
              className='text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
