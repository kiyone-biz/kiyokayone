export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-gray-100 dark:bg-gray-800 text-center py-4'>
      <div className='container mx-auto text-sm text-gray-600 dark:text-gray-400'>
        &copy; {year} Kiyoka Yone. All rights reserved.
      </div>
    </footer>
  );
}