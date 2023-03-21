import NavbarPull from "components/NavbarPull";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";

const createPull = () =>{
     const [open, setOpen] = useState(false);

    return(
        <>
            <Head>
                <title>Satify - CreatePull</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            <NavbarPull />
            <div className="flex flex-row">
                <div className={'text-white bg-gray-900 pt-28 p-20 h-screen ${open ? "w-72" : "w-20"}  relative'}>
                    < BsArrowLeftShort className="text-3xl bg-white text-gray-900 rounded-full absolute -right-3 cursor-pointer" onClick={() => setOpen(!open)} /> 

                    {/* sidebar menu list */}
                    <div>
                        <div className="pb-20">
                            <h3>NMB</h3>
                        </div>

                        <div>
                            <ul className="text-center">
                                <Link href="/">
                                    <li className="hover:bg-blue-900 h-6 rounded-md md:pb-12">Create Job</li>
                                </Link>
                                <Link href="/">
                                    <li className="hover:bg-blue-900 h-6 rounded-md  md:pb-12">View Jobs</li>
                                </Link>
                                <Link href="/">
                                    <li className="hover:bg-blue-900 h-6 rounded-md  md:pb-12">View Results</li>
                                </Link>
                                <Link href="/">
                                    <li className="hover:bg-blue-900 h-6 rounded-md  md:pb-12">Analysis</li>
                                </Link>
                            </ul>
                        </div>

                        <div className="text-center pt-96">
                            <h3 className="hover:bg-blue-900 h-8 rounded-md">Log_Out</h3>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col text-white md:pt-28 md:space-y-16 w-full">
                    <div>
                        <h3 className="text-xl">Dashboard</h3>
                    </div>

                    {/* contents */}
                    <div className="text-center">
                        <Link href="./createJob">
                            <button className="bg-blue-400 w-24 h-8 rounded-md">Create Job</button>
                        </Link>
                        <div className="flex flex-col">
                            <div className="pt-8 font-extralight text-center">
                                <h3>Welcome madindaLigwa, You are currently don't have a job created yet. </h3>
                                <h3>This is how ypu can create a job</h3>
                            </div>
                            <div className="">
                                <Image src="/video.jpg" width={400} height={100} />
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

            
        </>
    );
}
export default createPull;