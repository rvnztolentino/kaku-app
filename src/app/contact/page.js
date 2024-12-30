
export default function Contact() {
  return (
    <>
      <div className="fade-in-1 flex flex-col justify-center items-center min-h-screen font-noto-sans py-10 mt-[35px]">
        <h1 className="text-4xl text-dark-gray font-playfair-display">《 kaku 》</h1>
        <p className="text-md text-light-gray mt-2 mb-5">where productivity meets simplicity!</p>
        <p className="fade-in-2 xs:w-4/5 lg:w-1/3 5xl:w-1/4 px-2 mt-2 mb-2 text-md text-dark-gray xs:text-center lg:text-left">Have any questions? <br></br>Feel free to reach out to us, and we will get back to you shortly.</p>
        <iframe
          src="https://tally.so/embed/3E84D2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="500"
          frameBorder="0"
          title="Tally Form"
          allowFullScreen
          className="fade-in-2 xs:w-auto lg:w-1/3 5xl:w-1/4">
        </iframe>
      </div>
    </>
  );
}
