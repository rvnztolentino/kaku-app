// components/Header.js
import Link from 'next/link';

const Header = () => (
  <header className="sticky text-gray bg-white top-0 left-0 right-0 border-b border-slate-300 p-5">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Link href="/"><button className="hover:bg-light-gray-2 hover:rounded-md transition-all duration-300 ease-in-out text-md font-playfair-display text-dark-gray p-1">《 kaku 》</button></Link>
        <p className="bg-red-200 rounded-md font-bold text-left text-[10px] text-dark-gray px-2 py-0.5">now in beta!</p>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <Link href="/about"><button className="text-sm hover:text-red-200">about</button></Link>
          <p>•</p>
          <Link href="/beta"><button className="text-sm hover:text-red-200">beta</button></Link>
        </ul>
      </nav>
  </div>
  </header>
);

export default Header;
