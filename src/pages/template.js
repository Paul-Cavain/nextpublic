import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const template = () => {
    return(
        <>
            <Head>
                <title>Satify - templete</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>
            <div className="mt-28 md:mt-40">
                <div className="flex justify-center md:space-x-96 mb-6">
                    <div className="">
                        <h3 className="text-white font-extralight text-3xl mb-4">Job vacancy templates</h3>
                        <h3 className="text-white font-extralight text-md md:text-lg mb-8 md:mb-16">Get perfect and customized freely templates of your desired</h3>
                        <h3 className="text-white font-extralight text-lg md:mx-60">Start New document</h3>
                    </div>
                    <div></div>
                </div>

                {/* start new documents */}
                <div className="flex flex-col md:flex-row text-6xl justify-center space-y-12 md:space-y-0 space-x-12 md:space-x-10">
                    <div className="">
                        <Link href="/">
                            <Image src="/third.PNG" className="rounded-md" width={300} height={100} />
                            <h3 className="text-white text-sm">Blank</h3>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <Image src="/third.PNG" className="rounded-md" width={300} height={100} />
                            <h3 className="text-white text-sm">Astrounaute</h3>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <Image src="/third.PNG" className="rounded-md" width={300} height={100} />
                            <h3 className="text-white text-sm">Mobile Apps developer</h3>
                        </Link>
                    </div>
                </div>
                {/* start new documents */}

                {/* Satify New Tempplates */}
                <div className="md:mt-10 bg-[#16213F] md:pb-32">
                    <div className="text-white text-lg font-extralight mt-20 md:mx-60">
                        <h3 className="pt-10">Satify New Tempplates</h3>
                    </div>

                    <div className="flex flex-col md:flex-row md:text-6xl justify-center space-x-12 space-y-12 md:space-y-0 md:space-x-10 mt-4 md:mt-8">
                        <div>
                            <Link href="/">
                                <Image src="/third.PNG" className="rounded-md" width={300} height={100} />
                                <h3 className="text-white text-sm">Blank</h3>
                            </Link>
                        </div>
                        <div>
                            <Link href="/">
                                <Image src="/third.PNG" className="rounded-md" width={300} height={100} />
                                <h3 className="text-white text-sm">Astrounaute</h3>
                            </Link>
                        </div>
                        <div>
                            <Link href="/">
                                <Image src="/third.PNG" className="rounded-md" width={300} height={100} />
                                <h3 className="text-white text-sm">Mobile Apps developer</h3>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row text-6xl justify-center space-x-12 space-y-12 md:space-y-0 md:space-x-10 mt-4 md:mt-8 pb-20 md:pb-0">
                        <div className="">
                            <Link href="/">
                                <Image src="/third.PNG" className="rounded-md" width={300} height={100} />
                                <h3 className="text-white text-sm">Blank</h3>
                            </Link>
                        </div>
                        <div>
                            <Link href="/">
                                <Image src="/third.PNG" className="rounded-md" width={300} height={100} />
                                <h3 className="text-white text-sm">Astrounaute</h3>
                            </Link>
                        </div>
                        <div>
                            <Link href="/">
                                <Image src="/third.PNG" className="rounded-md" width={300} height={100} />
                                <h3 className="text-white text-sm">Mobile Apps developer</h3>
                            </Link>
                        </div>
                    </div>
                </div>

                
                
                {/* end Satify New Tempplates */}
            </div>
        </>
    );
}
export default template;