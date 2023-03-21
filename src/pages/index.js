import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import React from "react";
import Img from 'public/img.PNG';
import Logo from '/public/favicon.ico';
import {AiOutlineArrowRight, AiOutlineTwitter} from 'react-icons/ai'

export default function Home() {

  return (
    <>
      <Head>
        <title>Satify - Home</title>
        <meta name="keywords" content="LearnNextJs" />
      </Head>

      {/* contents start */}
      <Navbar />
      <div className='mt-[10%]'>

        {/* first contents */}
        <div className='flex flex-col md:flex-row left-0 top-0 justify-center md:space-x-40 md:m-5 pt-20 md:pt-12 md:px-40 px-4 md:px-32 text-white'>
          <div className='md:pt-2 2xl:pt-16'>
            <h1 className='text-3xl md:text-4xl font-extralight'>Find top talent today to be</h1>
            <h1 className='text-3xl md:text-4xl mb-8 font-extralight'>ready for tomorrow</h1>
            <p className='text-lg md:text-lg mb-8 font-extralight'>The recruiting landscape constantly shifts. But with Satify, you get the power of automating intelligently so you can be prepared for any challenge and find quality candidates to help drive your organization’s success.</p>
            <button className='text-white h-11 bg-blue-400 w-24 rounded-xl'>Let's Talk</button>
          </div>
          <div className='mt-20 md:mt-0'>
            <Image src="/landing.PNG" className='rounded-xl' width={1200} height={100} />
          </div>
        </div>
        {/* end first contents */}

        {/* second contents */}
        <div className='flex flex-col md:flex-row justify-center md:space-x-40 mt-28 pt-20 px-4 md:px-48 pb-20 text-white h-auto bg-[#16213F]'>
          <div className='mt-5 md:pt-2 2xl:pt-16'>
            <h1 className='text-3xl md:text-4xl font-extralight'>An intelligent that helps you</h1>
            <h1 className='text-3xl md:text-4xl mb-8 font-extralight'>works smarter, not harder</h1>
            <p className='text-lg md:text-lg mb-5 font-extralight'>Meet Satify Intelligent Automation, complete talent relationship management solution, that gives you an edge by empowering Talent Acquisition teams to build relationships as well as improve sourcing, nurturing, and interview practices.</p>

            <Link href="/">
              <div className='flex flex-row space-x-2'>
                <div>
                  <a href='/' className='text-blue-400 text-lg'>Learn more</a>
                </div>
                <div className='text-blue-400 text-lg pt-1.5'>
                  <AiOutlineArrowRight size={20} className="cursor-pointer" />
                </div>
              </div>
            </Link>
            
          </div>
          <div className='mt-14 md:mt-0'>
            <Image src="/video.jpg" className='rounded-xl' width={1200} height={100} />
          </div>
        </div>
      
        {/* end second contents */}

        {/* Third contents */}
        <div className='flex flex-col md:flex-row justify-center md:space-x-40 mt-28 md:mt-36 md:pb-20 px-4 md:px-48 text-white'>
          <div className=''>
            <Image src="/nature.PNG" className='rounded-xl' width={1300} height={200} />
          </div>

          <div className='mt-14 md:mt-0 2xl:mt-1'>
            <h1 className='text-3xl md:text-4xl font-extralight'>Nurture a pool of great talent</h1>
            <h1 className='text-3xl md:text-4xl mb-8 font-extralight'>for what’s next</h1>
            <p className=' text-lg md:text-lg mb-5 font-extralight'>It’s important for your team to access prospective candidates regardless of market conditions. Satify, the talent relationship management pioneer, offers a scalable solution to build authentic relationships with and nurture top candidates.</p>

            <Link href="/">
              <div className='flex flex-row space-x-2'>
                <div>
                  <a href='/' className='text-blue-400 text-lg'>Watch it in action</a>
                </div>
                <div className='text-blue-400 text-lg pt-1.5'>
                  <AiOutlineArrowRight size={20} className="cursor-pointer" />
                </div>
              </div>
            </Link>
          </div>

        </div>
        {/* end Third contents */}


        {/* Fourth contents */}
        <div className='flex flex-col md:flex-row justify-center md:space-x-40 mt-20 pb-20 px-4 md:px-48 md:pt-20 text-white'>
          
          <div className=''>
            <h1 className='text-3xl md:text-4xl font-extralight'>Change the game for your </h1>
            <h1 className='text-3xl md:text-4xl mb-8 font-extralight'>talent acquisition team</h1>
            <p className='text-lg md:text-lg mb-5 font-extralight'>Visual Insights makes data-driven recruiting easier than ever. We designed features like this in LeverTRM with recruiters in mind so they can build relationships and help managers hire better candidates faster.</p>

            <Link href="/">
              <div className='flex flex-row space-x-2'>
                <div>
                  <a href='/' className='text-blue-400 text-lg'>Learn more about visual insight</a>
                </div>
                <div className='text-blue-400 text-lg pt-1.5'>
                  <AiOutlineArrowRight size={20} className="cursor-pointer" />
                </div>
              </div>
            </Link>
          </div>

          <div className='mt-14 md:mt-10 2xl:mt-0'>
            <Image src="/third.PNG" className='rounded-xl' width={1200} height={100} />
          </div>

        </div>
        {/* end fourth contents */}

        {/* learn what satify can do */}
        <div className='justify-center bg-[#16213F] pt-20 md:pt-0 pb-20 md:pb-28 mt-16 md:mt-20 px-2 md:px-72 md:pt-28 font-extralight'>
          <div className='text-center bg-white p-16 md:p-20 rounded-xl'>
            <h3 className='mt-[-4%] text-3xl mb-4'>Learn what satify can do for you</h3>
            <h3 className='text-xl'>Streamline and scale your hiring today and be ready for tomorrow.</h3>

          <div className='flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mt-10'>
            <div>
              <button className='h-11 bg-blue-400 w-28 text-white rounded-xl'>Demo satify</button>
            </div>
            <div>
              <button className='h-11 bg-blue-400 w-28 text-white rounded-xl'>Contact us</button>
            </div>
          </div>

          </div>
        </div>
        {/* end learn what satify can do */}

      </div>
      <Footer />
      {/* end contents */}                         

    </>                                                                                                                                             
  );
}
