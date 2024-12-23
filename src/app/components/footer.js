// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="sticky fixed bg-white bottom-0 left-0 right-0 bg-gray-800 text-gray text-xs py-4 mx-4 mt-[-40px]">
      <div className="flex justify-between items-center">
        <p>© 2024 Kaku. All rights reserved.</p>
        <nav className="flex space-x-4">
          <Link href="/contact"><button className="hover:text-gray-400">Contact</button></Link>
          <p>•</p>
          <Link href="/jobs"><button className="hover:text-gray-400">Jobs</button></Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
