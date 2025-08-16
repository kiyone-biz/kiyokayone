import { Project } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  const displayImages = project.images || [project.image];
  const hasMultipleImages = displayImages.length > 1;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className='card card-hover group block overflow-hidden transition-base h-full flex flex-col'
    >
      {/* Image Section */}
      <div className='relative overflow-hidden bg-neutral-100 dark:bg-neutral-800'>
        <div className='relative aspect-video'>
          <Image
            src={displayImages[0]}
            alt={project.title}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-110'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          
          {/* Overlay gradient */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          
          {/* Multiple images indicator */}
          {hasMultipleImages && (
            <div className='absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-neutral-900/70 text-white text-xs rounded-full backdrop-blur-sm'>
              <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
              </svg>
              {displayImages.length}
            </div>
          )}

          {/* Project kind badge */}
          <div className='absolute top-3 left-3'>
            <span className={`
              px-3 py-1.5 text-xs font-semibold rounded-full backdrop-blur-md border shadow-lg
              ${project.kind === 'programming' 
                ? 'bg-primary-500/95 text-white border-primary-400/50 shadow-primary-500/25' 
                : 'bg-accent-500/95 text-white border-accent-400/50 shadow-accent-500/25'
              }
            `}>
              {project.kind === 'programming' ? 'プログラミング' : 'デザイン'}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className='p-6 flex flex-col flex-grow'>
        {/* Title */}
        <h3 className='text-lg font-semibold font-display text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2'>
          {project.title}
        </h3>
        
        {/* Description */}
        <p className='text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow'>
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.technologies.languages.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className='text-xs font-medium px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-md'
            >
              {tech}
            </span>
          ))}
          {project.technologies.languages.length > 3 && (
            <span className='text-xs font-medium px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 rounded-md'>
              +{project.technologies.languages.length - 3}
            </span>
          )}
        </div>

        {/* Action indicator */}
        <div className='flex items-center justify-between mt-auto'>
          <span className='text-sm text-neutral-500 dark:text-neutral-400'>
            詳細を見る
          </span>
          <svg 
            className='w-4 h-4 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all duration-200' 
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24'
            strokeWidth={1.5}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
          </svg>
        </div>
      </div>
    </Link>
  );
}
