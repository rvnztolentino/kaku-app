import EmailInput from "../components/EmailInput";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen font-noto-sans py-10 mt-[35px]">
        <h1 className="text-4xl text-dark-gray font-playfair-display">《 kaku 》</h1>
        <p className="text-md text-light-gray mt-2 mb-5">where productivity meets simplicity!</p>
          <iframe
            src="https://tally.so/embed/3E84D2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="500"
            frameBorder="0"
            title="Tally Form"
            allowFullScreen
            className="xs:w-auto lg:w-1/3 2xl:w-1/4"
          ></iframe>
      </div>
    </>
  );
}
