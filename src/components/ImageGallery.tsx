'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

export default function ImageGallery({ images, alt, className = '' }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) {
    return null;
  }

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setIsModalOpen(false);
  };

  return (
    <>
      {/* Main Gallery */}
      <div className={`space-y-4 ${className}`}>
        {/* Main Image */}
        <div className="relative aspect-video overflow-hidden rounded-xl shadow-medium group cursor-zoom-in">
          <Image
            src={images[selectedImage]}
            alt={`${alt} - ${selectedImage + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            onClick={() => setIsModalOpen(true)}
          />
          
          {/* Navigation arrows for main image */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm shadow-medium opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white dark:hover:bg-neutral-700"
                aria-label="前の画像"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm shadow-medium opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white dark:hover:bg-neutral-700"
                aria-label="次の画像"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-neutral-900/70 text-white text-sm rounded-full backdrop-blur-sm">
              {selectedImage + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`
                  relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200
                  ${selectedImage === index 
                    ? 'ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-neutral-900' 
                    : 'opacity-70 hover:opacity-100'
                  }
                `}
              >
                <Image
                  src={image}
                  alt={`${alt} サムネイル ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal for full-size viewing */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-900/70 text-white hover:bg-neutral-800/70 transition-colors"
              aria-label="閉じる"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation in modal */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/70 text-white hover:bg-neutral-800/70 transition-colors z-10"
                  aria-label="前の画像"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/70 text-white hover:bg-neutral-800/70 transition-colors z-10"
                  aria-label="次の画像"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Modal image */}
            <div 
              className="relative w-full h-full max-w-5xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage]}
                alt={`${alt} - ${selectedImage + 1} (拡大表示)`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Modal counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-900/70 text-white rounded-full backdrop-blur-sm">
                {selectedImage + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}