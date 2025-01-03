import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return (
    <>
    <div className="fade-in-1 flex flex-col justify-center items-center min-h-screen font-noto-sans mt-[-80px] xs:mt-[40px] sm:mt-[0px] lg:mt-[20px]">
        <h1 className="text-4xl text-dark-gray font-playfair-display">About《 kaku 》</h1>
        <p className="fade-in-2 text-md text-dark-gray mt-10 xs:mx-20 lg:mx-96 5xl:mx-144">
            《 kaku 》 is a tool for getting things done and taking notes. It helps you keep your ideas organized and manage your tasks with ease. The app is simple to use, fitting right into your daily routine.
            <br></br><br></br>Whether you're working on personal projects or professional tasks, 《 kaku 》 supports your needs. It helps you simplify your to-do lists and stay on top of important information. By keeping everything in one place, it makes your workflow smoother.
            <br></br><br></br>With 《 kaku 》, you can quickly jot down notes and organize them as you go. The platform is designed to be intuitive, so you spend less time figuring it out and more time being productive. It's the perfect companion for anyone looking to boost their efficiency.
            <br></br><br></br>Overall, 《 kaku 》 brings various productivity tools together in one app. It helps you stay focused and organized, no matter what you're working on. By centralizing your tasks and notes, it ensures you have everything you need at your fingertips.
        </p>
        <div className="fade-in-2 text-dark-gray text-center text-sm mt-6 mb-20 space-y-4">
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
  