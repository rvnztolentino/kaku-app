import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <div className="fade-in-1 flex flex-col justify-center items-center min-h-screen font-noto-sans py-10 xs:mt-[-40px] lg:mt-[-40px]">
        <h1 className="fade-in-1 text-xl text-dark-gray font-playfair-display">《 kaku 》</h1>
        <p className="fade-in-1 text-5xl text-dark-gray font-playfair-display text-center mt-2 xs:mx-20 lg:min-w-[800px] lg:max-w-[800px]">Plan your tasks. Simplify your day. Get more done.</p>
        <p className="fade-in-1 text-md text-dark-gray text-center mt-4 mb-4">where productivity meets simplicity!</p>
        <div className="fade-in-2 flex lg:space-x-4 mb-6 xs:text-center xs:block lg:inline-block">
          <Link href="/start">
            <button className="bg-black rounded-full hover:bg-gray transition-all duration-300 ease-in-out text-white mt-2 xs:mx-8 lg:mx-0 px-10 py-2"> 
              Get started 
            </button>
          </Link>
          <Link href="/download"><button className="rounded-full hover:underline transition-all duration-300 ease-in-out text-black mt-4 px-10 py-2"> 
            Download the app 
            </button>
          </Link>
        </div>
        <Image src="/neko.gif" width={500} height={500} alt="gif" />
      </div>
    </>
  );
}
