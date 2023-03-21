import Navbar from "components/Navbar";
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";
import Footer from "components/Footer";

const login = ()=>{
    return(
        <>
            <Head>
                <title>Satify - login</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>
            <Navbar />
            <div className="flex flex-col md:flex-row gap-12 px-8 md:px-56 mt-28 md:mt-40 mb-36 md:mb-28">
                <div className="text-white space-y-10 mt-12">
                    <h3 className="text-4xl md:text-3xl font-light">Enjoy confortably with satify</h3>
                    <p className="text-xl md:text-lg font-light">The recruiting landscape constantly shifts. But with Satify, you get the power of automating intelligently so you can be prepared for any challenge and find quality candidates to help drive your organization’s success.</p>
                    <button className="text-white font-extralight bg-[#005687] md:w-32 md:h-12 w-24 h-12 md:mt-8 mt-16 rounded-lg mb-5 md:text-lg text-xl">Let's Talk</button>
                </div>
                <div className="flex flex-col px-20 py-8 md:py-12 bg-white mt-10 md:mt-0 rounded-md">
                    {/* <Image src="/logo.png" className="rounded-full mb-4" width={70} height={100} /> */}
                    <div className="mb-14 md:mb-5">
                        <h1 className="text-3xl md:text-3xl text-center text-bold font-extralight">login</h1>
                    </div>
                    <div className="">
                        <form className="flex flex-col">
                            <div className="mb-10 md:mb-4">
                                <input className="form-input w-full md:w-72 px-18 h-10 md:h-10 text-[#005687] bg-gray-300 md:bg-gray-100 hover:border-2 border-blue-700 box-border rounded-xl md:rounded-lg" type='text' name='username' placeholder='Enter Username' />
                            </div>
                            <div className="mb-10 md:mb-4">
                                <input className="form-input w-full md:w-72 px-18 h-10 md:h-10 text-[#005687] bg-gray-300 md:bg-gray-100 hover:border-2 border-blue-700 box-border rounded-xl md:rounded-lg" type='text' name='username' placeholder='Enter Password' />
                            </div>
                            <Link href="../ApplicationPull/createPull">
                                <button className="text-white font-extralight bg-[#005687] w-full md:w-72 px-18 h-10 md:h-10 rounded-md mb-5 sm:mb-8 hover:border-2 border-blue-300">login</button>
                            </Link>
                            <div className="text-[#049AAE] text-center">
                                <a href="/">
                                    <span className="text-lg md:text-md">Forget Password?</span>
                                </a>
                            </div>
                            <div className="mt-4 md:mt-2 text-center">
                                <span className="text-lg md:text-md">New User?</span>
                                <a href="/signup">
                                <span className="text-[#049AAE] text-lg md:text-md">Sign Up</span>
                                </a>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}
export default login;

