import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-header-footer text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-3xl font-bold">My Blog</h1>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-4`}>
          <Link href="/" legacyBehavior>
            <a className="block px-4 py-2 text-white hover:text-gray-200 transition-colors duration-300">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="block px-4 py-2 text-white hover:text-gray-200 transition-colors duration-300">About</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="block px-4 py-2 text-white hover:text-gray-200 transition-colors duration-300">Blog</a>
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none focus:ring-2 focus:ring-gray-300 rounded">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
