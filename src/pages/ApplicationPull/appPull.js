import NavbarPull from "components/NavbarPull";
import Head from "next/head";
import { BsArrowLeftShort, BsLaptop, BsArrowRightShort, BsGlobe2, BsPeopleFill } from "react-icons/bs";
import { useState } from "react";

const AppPull = () =>{
     const [open, setOpen] = useState(false);

    return(
        <>
            <Head>
                <title>Satify - applicationPull</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            <NavbarPull />
            <div className="flex flex-row md:space-x-16">
                <div className={'text-white text-xl bg-gray-900 pt-28 p-20 h-screen ${open ? "w-72" : "w-20"}  relative'}>
                    < BsArrowLeftShort className="text-3xl bg-white text-gray-900 rounded-full absolute -right-3 cursor-pointer" onClick={() => setOpen(!open)} /> 
                </div>
                <div className="flex flex-col text-white md:pt-28 md:space-y-16">
                    <div>
                        <h3 className="text-xl">Dashboard</h3>
                    </div>

                    {/* first dashboard contents */}
                    <div className="flex flex-row text-black space-x-20">

                        {/* first card */}
                        <div className="flex flex-col space-y-6 bg-white w-64 px-2 rounded-md shadow-10 pb-2">
                            <div className="flex flex-row space-x-12">
                                <div className="space-y-2">
                                    <h3 className="text-md">TOTAL VISITOS</h3>
                                    <h3 className="text-md">3,191,922</h3>
                                </div>
                                <div>
                                    < BsLaptop className="text-6xl opacity-50" />
                                </div>
                            </div>
                            
                            <div className="flex flex-row bg-gray-900 text-white space-x-2 h-6 justify-center pt-1">
                                <div>
                                    <h3 className="text-xs">View Detail</h3>
                                </div>
                                <div>
                                    < BsArrowRightShort className="text-sm text-black bg-white rounded-full" />
                                </div>
                            </div>
                            
                        </div>
                        {/* end of first card */}

                        {/* second card */}
                        <div className="flex flex-col space-y-6 bg-white w-64 px-2 rounded-md shadow-10 pb-2">
                            <div className="flex flex-row space-x-12">
                                <div className="space-y-2">
                                    <h3 className="text-md">UNIQUE VISITORS</h3>
                                    <h3 className="text-md">191,922</h3>
                                </div>
                                <div className="pt-2">
                                    < BsPeopleFill className="text-5xl opacity-50" />
                                </div>
                            </div>
                            
                            <div className="flex flex-row bg-gray-900 text-white space-x-2 h-6 justify-center pt-1">
                                <div>
                                    <h3 className="text-xs">View Detail</h3>
                                </div>
                                <div>
                                    < BsArrowRightShort className="text-sm text-black bg-white rounded-full" />
                                </div>
                            </div>
                            
                        </div>
                        {/* end of second card */}

                        {/* third card */}
                        <div className="flex flex-col space-y-6 bg-white w-64 px-2 rounded-md shadow-10 pb-2">
                            <div className="flex flex-row space-x-12">
                                <div className="space-y-2">
                                    <h3 className="text-md">AVG TIME ON SITE</h3>
                                    <h3 className="text-md">00:12:23</h3>
                                </div>
                                <div className="pt-2">
                                    < BsGlobe2 className="text-5xl opacity-50" />
                                </div>
                            </div>
                            
                            <div className="flex flex-row bg-gray-900 text-white space-x-2 h-6 justify-center pt-1">
                                <div>
                                    <h3 className="text-xs">View Detail</h3>
                                </div>
                                <div>
                                    < BsArrowRightShort className="text-sm text-black bg-white rounded-full" />
                                </div>
                            </div>
                            
                        </div>
                        {/* end of third card */}

                        {/* fourth card */}
                        <div className="flex flex-col space-y-6 bg-white w-64 px-2 rounded-md shadow-10 pb-2">
                            <div className="flex flex-row space-x-12">
                                <div className="space-y-2">
                                    <h3 className="text-md">TOTAL VISITOS</h3>
                                    <h3 className="text-md">3,191,922</h3>
                                </div>
                                <div>
                                    < BsLaptop className="text-6xl opacity-50" />
                                </div>
                            </div>
                            
                            <div className="flex flex-row bg-gray-900 text-white space-x-2 h-6 justify-center pt-1">
                                <div>
                                    <h3 className="text-xs">View Detail</h3>
                                </div>
                                <div>
                                    < BsArrowRightShort className="text-sm text-black bg-white rounded-full" />
                                </div>
                            </div>
                            
                        </div>
                        {/* end of fourth card */}

                    </div>
                    {/* end of first dashboard content */}
                    
                </div>
                
            </div>

            
        </>
    );
}
export default AppPull;