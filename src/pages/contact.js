import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineCompass, AiOutlineHome, AiOutlinePhone, AiOutlineRedEnvelope, AiOutlineWhatsApp } from 'react-icons/ai'

const contact = ()=>{
    return(
        <>
            <div>
                <Head>
                    <title>Satify - contact</title>
                    <meta name="keywords" content="LearnNextJs" />
                </Head>


                {/* contact us icons */}
                <Navbar />
                <div className="flex flex-col md:flex-row justify-evenly md:mt-40 text-white font-extralight">
                    <div className="flex flex-col justify-start space-y-2">
                        <AiOutlineCompass size={50} className="md:mx-12 cursor-pointer text-blue-400" /> 
                        <h3 className="text-start">Address : <span>Udom-Cive</span></h3>
                    </div>
                    <div className="flex flex-col justify-start space-y-2">
                        <AiOutlineHome size={50} className="md:mx-12 cursor-pointer text-blue-400" />
                        <h3>Postal : <span>P.O.Box 172 Dodoma</span></h3>  
                    </div>
                    <div className="flex flex-col justify-start space-y-2">
                        <AiOutlinePhone size={50} className="md:mx-12 cursor-pointer text-blue-400" />
                        <h3>Phone : <span>+25575291920</span></h3>
                    </div>
                    <div className="flex flex-col justify-start space-y-2">
                        <AiOutlineRedEnvelope size={50} className="md:mx-12 cursor-pointer text-blue-400" />
                        <h3>Email : <span>satify01@yahoo.com</span></h3>
                    </div>
                    
                </div>
                {/* end of contact us icons */}


                {/* contact form and image */}
                <div className="flex flex-col md:flex-row justify-evenly md:mt-40 text-white font-extralight">
                <div>
                    <h1 className="text-2xl md:mb-6">Contact Us</h1>
                    <form>
                        <div className="flex flex-col md:flex-row md:space-x-4 md:mb-4"> 
                            <div className="flex flex-col">
                                <label className="text-sm uppercase">Full Name</label>
                                <input className="rounded-md md:h-8 md:w-56" type="text" name="username" placeholder="Enter Full name" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm uppercase">Email Address</label>
                                <input className="rounded-md md:h-8 md:w-56" type="email" name="email" placeholder="Enter Email" />
                            </div>
                        </div>
                        <div className="flex flex-col md:mb-4">
                            <label className="text-sm uppercase">Subject</label>
                            <input className="rounded-md md:h-8 md:w-full" type="text" name="subject" placeholder="Subject" />
                        </div>
                        <div className="flex flex-col md:mb-8">
                            <label className="text-sm uppercase">Message</label>
                            <textarea className="rounded-md md:w-full md:h-20" type="text" name="message" placeholder="Message..." />
                        </div>
                        <div className="md:pb-48">
                            <button className="h-10 w-32 rounded-md bg-blue-400" type="submit" name="submit">Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="md:mt-10">
                    <Image className="rounded-md" src="/third.PNG" width={500} height={100} />
                </div>
                
                {/* contact form and image */}

            </div>
            <Footer />
            </div>
        </>
    );
}
export default contact;