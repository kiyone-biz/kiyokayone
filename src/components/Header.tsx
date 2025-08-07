'use client';

import Link from 'next/link';

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
  return (
    <header className='bg-white dark:bg-gray-800 shadow sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='text-xl font-bold'>
          <Link href='/'>Kiyoka Yone</Link>
        </div>
        <nav className='flex space-x-4'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='hover:underline focus:outline-none focus-visible:underline'
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* <button
          aria-label="Toggle Theme"
          onClick={toggleTheme}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button> */}
      </div>
    </header>
  );
}
