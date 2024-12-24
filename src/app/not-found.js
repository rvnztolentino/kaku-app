import Image from 'next/image'

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen font-noto-sans py-10 mt-[-80px]">
        <p className="text-md text-dark-gray mt-2 mb-5">Oops! The page you are looking cannot be found :(</p>
        <Image src="/neko.gif" width={500} height={500} alt="gif" />
      </div>
    </>
  );
}
