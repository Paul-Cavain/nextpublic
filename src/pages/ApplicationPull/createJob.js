import NavbarPull from "components/NavbarPull";
import Link from "next/link";
import Head from "next/head";
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";

const createJob = () =>{
     const [open, setOpen] = useState(false);

    return(
        <>
            <Head>
                <title>Satify - CreateJob</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            <NavbarPull />
            <div className="flex flex-row">
                <div className={'text-white bg-gray-900 pt-28 p-20 h-screen ${open ? "w-72" : "w-20"}  relative'}>
                    < BsArrowLeftShort className="text-3xl bg-white text-gray-900 rounded-full absolute -right-3 cursor-pointer" onClick={() => setOpen(!open)} /> 

                    {/* sidebar menu list */}
                    <div className="">
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
                    <div className="pl-10">
                        <h3 className="text-xl">Create a Job</h3>
                        <h3 className="text-center text-3xl pt-10">NMB</h3>
                    </div>

                    <form className="w-full max-w-full px-96">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-white" for="grid-first-name">
                                Job Title
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-white" for="grid-last-name">
                                job position
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                                Job description
                            </label>
                            <textarea className="appearance-none block w-full h-40 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Type a job description hre ......!" />
                            
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                                Locaion
                            </label>
                            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Country-City" />
                            </div>

                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                                Start date
                            </label>
                            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="date" placeholder="Country-City" />
                            </div>

                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                                end date
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="date" placeholder="Country-City" />
                            </div>
 
                        </div>
                        <div className="w-full md:w-full pt-6 md:mb-0">  
                            <label class="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600" id="file_input" type="file" />
                        </div>

                        <div className="pt-8">
                            <Link href="./jobreview">
                                <button className="bg-blue-400 w-24 h-10 rounded-md">Create Job</button>
                            </Link>
                        </div>
                        
                    </form>

                    <div>

                    </div>

                    {/* contents */}
                   

                </div>
                
            </div>

            
        </>
    );
}
export default createJob;