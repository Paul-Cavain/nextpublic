import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const signup = () => {
    return(
        <>
            <Head>
                <title>Satify - sign_up</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            <Navbar />
            <div className="text-center text-4xl md:text-3xl pt-32 mb-12 md:mb-16">
                <h3 className="text-white font-extralight">Create an Account</h3>
            </div>
            <div className='flex flex-col md:flex-row justify-center px-4 md:px-12 md:gap-72 md:pb-28 text-white'>
                <div className="md:pt-12 xl:pt-24">
                    <Image src="/landing.PNG" className='rounded-xl' width={400} height={100} />
                </div>
                <div className="mt-16 md:mt-0 px-2 md:px-20 bg-white rounded-xl mb-28 md:pb-8">
                    <h3 className="text-2xl text-black font-extralight mb-4 md:mb-8 md:pt-8">Fill the required informations</h3>
                    <form className="">

                        <div className="mb-3">
                            <input className="form-input w-full h-10 md:h-10 text-[#005687] bg-gray-300 hover:border-2 border-blue-700 box-border rounded-lg" type='text' name='username' placeholder='Enter First name' />
                        </div>
                        <div className="mb-3">
                            <input className="form-input w-full h-10 md:h-10 text-[#005687] bg-gray-300 hover:border-2 border-blue-700 box-border rounded-lg" type='text' name='username' placeholder='Enter Last name' />
                        </div>

                        
                        <div className="mb-3">
                            <input className="form-input w-full h-10 md:h-10 text-[#005687] bg-gray-300 hover:border-2 border-blue-700 box-border rounded-lg" type='age' name='username' placeholder='Enter Age' />
                        </div>
                        <div className="mb-3">
                            <select className="form-input w-full h-10 md:h-10 text-[#005687] bg-gray-300 hover:border-2 border-blue-700 box-border rounded-lg">
                                <option className="disabled text-black">f</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>


                        <div className="mb-4">
                        <input className="form-input w-full h-10 md:h-10 text-[#005687] bg-gray-300 hover:border-2 border-blue-700 box-border rounded-lg" type='email' name='username' placeholder='Enter Email' />
                        </div>
                        <div className="mb-4">
                            <input className="form-input w-full h-10 md:h-10 text-[#005687] bg-gray-300 hover:border-2 border-blue-700 box-border rounded-lg" type='email' name='username' placeholder='Create Password' />
                        </div>
                        <Link href="/login">
                            <button className="text-white font-extralight bg-[#005687] w-full h-10 md:h-10 rounded-md mb-5 hover:border-2 border-blue-300">Submit</button>
                        </Link>
                        <div className="text-center mb-16 md:mb-0">
                            <span className="md:px-2 text-black">Have an account?</span>
                            <a href="/login">
                                <span className="text-[#049AAE]">Sign_in</span>
                            </a>
                        </div>

                    </form>
                </div>

            </div>
            <Footer />
        </>

    );
}
export default signup;