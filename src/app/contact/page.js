import EmailInput from "../components/EmailInput";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen font-noto-sans py-10 mt-[-80px]">
        <h1 className="text-4xl text-dark-gray font-playfair-display">《 kaku 》</h1>
        <p className="text-md text-light-gray mt-2 mb-5">where productivity meets simplicity!</p>
        <EmailInput></EmailInput>
      </div>
    </>
  );
}
