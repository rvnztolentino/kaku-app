// components/Header.js
import Link from 'next/link';

const Header = () => (
  <header className="text-gray fixed top-0 left-0 right-0 z-50 p-5 border-b border-slate-300">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
      <button className="text-lg font-playfair-display text-dark-gray p-1 hover:bg-light-gray-2 hover:rounded-md transition-all duration-300 ease-in-out">《 kaku 》</button>
      <p className="text-left text-xs text-dark-gray px-2 py-0.5 bg-red-200 rounded-md">coming soon!</p>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <button className="hover:text-red-200">about</button>
          <p>//</p>
          <button className="hover:text-red-200">blog</button>
        </ul>
      </nav>
  </div>
  </header>
);

export default Header;
