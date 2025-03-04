import Image from 'next/image';
import Link from 'next/link';
import { LaptopMinimal, ListTodo } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Download() {
  return (
    <>
      <div className="fade-in-1 flex flex-col justify-center items-center min-h-screen font-noto-sans py-10 xs:mt-[-20px] lg:mt-[-70px]">
        <h1 className="fade-in-1 text-xl text-dark-gray font-playfair-display">《 kaku 》</h1>
        <p className="fade-in-1 text-5xl text-dark-gray font-playfair-display text-center mt-2 xs:mx-4 lg:mx-96 2xl:mx-96">Download the app.</p>
        <p className="fade-in-1 text-md text-dark-gray text-center mt-4 mb-4">please select from the options below</p>
        <div className="fade-in-2 flex lg:space-x-4 mb-6 xs:text-center xs:block lg:inline-block xs:space-y-4 lg:space-y-0">
        <Dialog>
            <DialogTrigger className="bg-white rounded-3xl border border-light-gray shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out mt-2 xs:mx-2
                                        lg:mx-0 xs:px-6 xs:py-4 lg:px-10 lg:py-6 font-playfair-display text-black text-2xl">
                <Image src="/logo/apple-logo.svg" width={100} height={100} alt="img" className="mb-2" /> iOS
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Download the App on iOS</DialogTitle>
                    <ScrollArea className="h-[400px] lg:w-full rounded-md border p-4 text-gray">
                        1. Open Safari and navigate to this website. <br></br>2. Tap the Share button at the bottom of the screen. <br></br>
                        <Image src="/ios-guide/ios-guide-1.png" width={400} height={400} alt="img" className="mt-2" />
                        <br></br>3. Scroll down and tap on "Add to Home Screen." <br></br>
                        <Image src="/ios-guide/ios-guide-2.png" width={400} height={400} alt="img" className="mt-2" />
                        <br></br>4. Edit the name if you like, then tap "Add." <br></br>
                        <Image src="/ios-guide/ios-guide-3.png" width={400} height={400} alt="img" className="mt-2" />
                        <br></br>5. The app icon will now appear on your home screen.
                    </ScrollArea>
                </DialogHeader>
            </DialogContent>
        </Dialog>


            <Dialog>
                <DialogTrigger className="
                                    bg-white rounded-3xl border border-light-gray shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out mt-2 xs:mx-2
                                    lg:mx-0 xs:px-6 xs:py-4 lg:px-10 lg:py-6 font-playfair-display text-black text-2xl">
                    <Image src="/logo/android-logo.svg" width={84} height={84} alt="img" className="mb-2" /> Android
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Download the App on Android</DialogTitle>
                        <ScrollArea className="h-[400px] w-full rounded-md border p-4 text-gray">
                            1. Open Chrome and navigate to this website.
                            <br></br>2. Tap the Menu button (three dots) in the top-right corner.
                            <Image src="/android-guide/android-guide-1.png" width={500} height={500} alt="img" className="mt-2" />
                            <br></br>3. Select "Add to Home screen."
                            <Image src="/android-guide/android-guide-2.png" width={300} height={300} alt="img" className="border mt-2" />
                            <br></br>4. Edit the name if you like, then tap "Add."
                            <br></br>5. The app icon will now appear on your home screen.
                        </ScrollArea>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger className="
                    bg-white rounded-3xl border border-light-gray shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out mt-2 xs:mx-0
                    lg:mx-0 xs:px-6 xs:py-4 lg:px-10 lg:py-6 font-playfair-display text-black text-2xl">
                <LaptopMinimal width={98} height={108} className="text-black" /> PC / Mac
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Download on PC / Mac</DialogTitle>
                    <ScrollArea className="h-[400px] w-full rounded-md border p-4 text-gray">
                        Desktop PWA installation is currently supported by Google Chrome and Microsoft Edge on Linux, 
                        Windows, macOS, and Chromebooks.
                        <br></br><br></br>These browsers will show an install badge (icon) in the URL 
                        bar. (see the image below)
                        <Image src="/pc-guide/pc-guide-1.png" width={500} height={500} alt="img" className="mt-2" />
                    </ScrollArea>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <br></br>

        </div>
            <Link href="/">
                <button className="fade-in-2 bg-black rounded-full hover:bg-gray transition-all duration-300 ease-in-out text-white mt-2 xs:mx-8 xs:mr-6 lg:mr-0 lg:mx-0 px-10 py-2" > 
                    Go back
                </button>
            </Link>
      </div>
    </>
  );
}
