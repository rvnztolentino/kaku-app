import Image from 'next/image'

export default function Download() {
  return (
    <>
      <div className="fade-in-1 flex flex-col justify-center items-center min-h-screen font-noto-sans py-10 mt-[-80px]">
        <p className="text-md text-dark-gray mt-2 mb-5">Nothing yet! Check back later :)</p>
        <Image src="/neko.gif" width={500} height={500} alt="gif" />
      </div>
    </>
  );
}
