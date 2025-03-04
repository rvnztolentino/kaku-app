import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="sticky fixed font-noto-sans bg-white bottom-0 left-0 right-0 bg-gray-800 text-gray text-xs py-4 mx-4 mt-[-40px]">
      <div className="flex justify-between items-center">
        <p className="text-light-gray">kaku corp © 2024</p>
        <nav className="flex space-x-4 text-gray">
          <Link href="/jobs"><button className="hover:underline">jobs</button></Link>
          <Link href="/contact"><button className="hover:underline">contact</button></Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
