// components/Header.js
import Link from 'next/link';

const Header = () => (
  <header className="text-gray fixed top-0 left-0 right-0 z-50 p-5 border-b border-slate-300">
    <div className="mx-0">
      <nav>
        <ul className="text-right space-x-4">
          <a className="hover:text-gray-200">about</a>
          <a className="hover:text-gray-200">//</a>
          <a className="hover:text-gray-200">blog</a>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
