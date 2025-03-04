import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { AlignJustify, ChevronDown } from 'lucide-react';

const Header = () => (
  <header className="sticky font-noto-sans text-gray bg-white top-0 left-0 right-0 border-b border-slate-300 p-5">
    <div className="flex justify-between items-center">

      <div className="flex items-center space-x-2">
        <Link href="/"><button className="hover:bg-light-gray-2 hover:rounded-md transition-all duration-300 ease-in-out text-md font-playfair-display text-dark-gray p-1">《 kaku 》</button></Link>
        <p className="bg-yellow-300 rounded-md text-left text-[11px] text-black px-2 py-0.5">now in beta!</p>
      </div>

      <nav className="block">
        <ul className="flex space-x-4">
          <Link href="/about"><button className="text-sm hover:underline">about</button></Link>
          <p>//</p>
          <Link href="/contact"><button className="text-sm hover:underline">contact</button></Link>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
