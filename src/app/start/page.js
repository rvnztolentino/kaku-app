import Image from 'next/image';
import Link from 'next/link';
import { ListTodo, PencilLine } from 'lucide-react';

export default function Start() {

  return (
    <>
      <div className="fade-in-1 flex flex-col justify-center items-center min-h-screen font-noto-sans py-10 xs:mt-[-60px] lg:mt-[-70px]">
        <h1 className="fade-in-1 text-xl text-dark-gray font-playfair-display">《 kaku 》</h1>
        <p className="fade-in-1 text-5xl text-dark-gray font-playfair-display text-center mt-2 xs:mx-0 lg:mx-96 2xl:mx-96">Get started.</p>
        <p className="fade-in-1 text-md text-dark-gray text-center mt-4 mb-4">please select from the options below</p>
        <div className="fade-in-2 flex space-x-4 mb-6 xs:text-center xs:block lg:inline-block">
            <Link href="/tasks">
                <button className="
                    bg-white rounded-3xl border border-light-gray hover:bg-light-gray-2 transition-all duration-300 ease-in-out mt-2 xs:mx-0
                    lg:mx-0 xs:px-6 xs:py-4 lg:px-10 lg:py-6 font-playfair-display text-black text-2xl">
                        <ListTodo className="w-24 h-24 text-black"/>
                        Tasks
                </button>
            </Link>
            <Link href="/notes">
                <button className="
                    bg-white rounded-3xl border border-light-gray hover:bg-light-gray-2 transition-all duration-300 ease-in-out mt-2 xs:mx-0
                    lg:mx-0 xs:px-6 xs:py-4 lg:px-10 lg:py-6 font-playfair-display text-black text-2xl">
                        <PencilLine className="w-24 h-24 text-black"/>
                        Notes
                </button>
            </Link><br></br>
        </div>
            <Link href="/">
                <button className="fade-in-2 bg-black rounded-full hover:bg-gray transition-all duration-300 ease-in-out text-white mt-2 xs:mx-8 lg:mx-0 px-10 py-2" > 
                    Go back
                </button>
            </Link>
      </div>
    </>
  );
}
