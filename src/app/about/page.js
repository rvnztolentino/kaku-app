import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return (
    <>
    <div className="fade-in-1 flex flex-col justify-center items-center min-h-screen font-noto-sans mt-[-80px] xs:mt-[40px] sm:mt-[0px] lg:mt-[20px]">
        <h1 className="text-4xl text-dark-gray font-playfair-display">About《 kaku 》</h1>
        <p className="fade-in-2 text-md text-dark-gray xs:mx-8 xs:max-w-[290px] lg:min-w-[500px] lg:max-w-[500px] mt-4 mb-4 text-justify">
            《 kaku 》 is a simple tool for taking notes and managing tasks.
            It keeps your ideas organized and helps you stay on top of your to-do list. 
            There&apos;s no cloud sync, everything stays in your browser using local storage.
            Just open the app, jot down notes, and check off tasks as you go.
            No extra setup, no distractions, just a clean and efficient way to stay organized. <br></br><br></br> 
            <b>※ Note: 《 kaku 》 is now deprecated. </b><br></br>
            Development of this site has been discontinued as I am currently working on a better project.
            Thank you to everyone who used it! <br></br>
        </p>
        <div className="fade-in-2 text-dark-gray text-center text-sm mt-6 xs:mb-40 lg:mb-28 space-y-4">
            <p className="inline">made by
                <Link href="https://github.com/rvnztolentino"><button className="text-blue px-1">@rvnztolentino</button></Link>
                and
                <Link href="https://github.com/bntlyr"><button className="text-blue px-1">@bntlyr</button></Link>
            </p>
            <Image src="/neko.gif" width={500} height={500} alt="gif" />
        </div>
        
    </div>
    </>
    );
}

export default About;
  