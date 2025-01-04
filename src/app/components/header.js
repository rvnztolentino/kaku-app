import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { AlignJustify, ChevronDown } from 'lucide-react';

const Header = () => (
  <header className="sticky text-gray bg-white top-0 left-0 right-0 border-b border-slate-300 p-5">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Link href="/"><button className="hover:bg-light-gray-2 hover:rounded-md transition-all duration-300 ease-in-out text-md font-playfair-display text-dark-gray p-1">《 kaku 》</button></Link>
        <p className="bg-red-200 rounded-md font-bold text-left text-[10px] text-dark-gray px-2 py-0.5">now in beta!</p>
      </div>
      <nav className="xs:hidden lg:block">
        <ul className="flex space-x-8">
          <Popover>
            <PopoverTrigger className="flex items-center mt-[1px] text-sm">more <ChevronDown className="ml-2 w-4 text-dark-gray"/></PopoverTrigger>
              <PopoverContent className="flex flex-col space-y-2 w-44 text-left text-dark-gray">
                <p className="text-light-gray text-sm px-2">Select an option.</p>
                <Link href="/tasks"><button className="text-sm hover:underline px-2">tasks</button></Link>
                <Link href="/notes"><button className="text-sm hover:underline px-2">notes</button></Link>
              </PopoverContent>
          </Popover>
          <Link href="/about"><button className="text-sm hover:underline">about</button></Link>
          <Link href="/contact"><button className="text-sm hover:underline">contact</button></Link>
        </ul>
      </nav>
      <nav className="xs:block lg:hidden">
        <ul className="flex space-x-4">
        <Popover>
            <PopoverTrigger className="flex items-center mt-[1px] text-sm"><AlignJustify /></PopoverTrigger>
              <PopoverContent className="flex flex-col space-y-2 w-44 text-left text-dark-gray">
                <p className="text-light-gray text-sm px-2">Select an option.</p>
                <Link href="/tasks"><button className="text-sm hover:underline px-2">tasks</button></Link>
                <Link href="/notes"><button className="text-sm hover:underline px-2">notes</button></Link>
                <Link href="/about"><button className="text-sm hover:underline px-2">about</button></Link>
                <Link href="/contact"><button className="text-sm hover:underline px-2">contact</button></Link>
              </PopoverContent>
          </Popover>
        </ul>
      </nav>
  </div>
  </header>
);

export default Header;
