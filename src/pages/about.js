import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineCompass, AiOutlineFieldTime, AiOutlinePhone } from "react-icons/ai";

const about = ()=>{
    return(
        <div>
            <Head>
                <title>Satify - about</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            {/* about contents and photo */}
            <Navbar />
            <div className="flex flex-col md:flex-row justify-evenly md:mt-44 text-white font-extralight">
                <div className="md:mt-12">
                    <Image className="rounded-md" src="/landing.PNG" width={400} height={100} />
                </div>
                <div className="md:mt-1">
                    <h2 className="md:text-2xl">About Us</h2>
                    <p className="md:mt-8">The main problem you see on the average ecommerce compiled client and server successfully </p>
                    <p> compiled client and server successfully compiled client and server successfully compiled client and server </p>
                    <p> successfully compiled client and server successfully compiled client and server successfully compiled client</p>
                    <p> and server successfully compiled client and server successfully compiled client and server successfully compiled</p>
                    <p> client and server successfully compiled client and server successfully compiled client and server successfully </p>

                    <div className="md:mt-8">
                        <button className="md:text-xl h-10 w-32 bg-blue-400 rounded-md">contact us</button>
                    </div>
                </div>
            </div>
            {/* end about contents and photo */}


            {/* about aditional details */}
            <div className="flex flex-col md:flex-row justify-evenly md:space-x-4 md:mt-56 md:pb-40">
                <div className="flex flex-col bg-white md:w-80 px-12 rounded-md h-auto">
                    <div className="flex flex-row pt-10">
                        <AiOutlinePhone size={30} />
                        <span className="uppercase">Call us</span>
                    </div>
                    <div>
                        <h3>+255755291920</h3>
                        <h3>+255717416853</h3>
                    </div>
                </div>
                <div className="flex flex-col bg-white md:w-80 px-12 py-4 rounded-md h-auto">
                    <div className="flex flex-row pt-6">
                        <AiOutlineCompass size={30} />
                        <span className="uppercase">Location</span>
                    </div>
                    <div>
                        <h3>Udom-Cive</h3>
                    </div>
                </div>
                <div className="flex flex-col bg-white md:w-80 px-12 py-4 rounded-md h-auto">
                    <div className="flex flex-row pt-6">
                        <AiOutlineFieldTime size={30} />
                        <span className="uppercase">Hours</span>
                    </div>
                    <div className="">
                        <h3>Mon-Fri... 11am-8pm</h3>
                        <h3>Sat, Sun... 6am-8pm</h3>
                    </div>
                </div>

            </div>
            <Footer />
            {/* end about aditional details */}
        </div>
    );
}
export default about;