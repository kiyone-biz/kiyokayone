'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'ホーム' },
  { href: '/about', label: 'プロフィール' },
  { href: '/projects', label: '開発実績' },
  { href: '/contact', label: 'お問い合わせ' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        sticky top-0 z-50 transition-all duration-300 ease-out
        ${isScrolled 
          ? 'glass shadow-medium backdrop-blur-xl' 
          : 'bg-transparent'
        }
      `}
    >
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='relative'>
            <Link 
              href='/' 
              className='text-xl font-bold font-display text-neutral-900 dark:text-neutral-100 hover:text-primary-500 transition-colors duration-200'
            >
              <span className='relative'>
                Kiyoka Yone
                <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full'></div>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative px-3 py-2 text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'text-primary-500' 
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-500'
                    }
                    group
                  `}
                >
                  <span className='relative z-10'>{item.label}</span>
                  {/* Active indicator */}
                  {isActive && (
                    <div className='absolute inset-0 bg-primary-50 dark:bg-primary-900/20 rounded-lg animate-fade-in'></div>
                  )}
                  {/* Hover effect */}
                  <div className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full group-hover:left-0'></div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button 
            className='md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200'
            aria-label='メニュー'
          >
            <svg width='24' height='24' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
