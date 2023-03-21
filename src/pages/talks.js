import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Head from "next/head";
import Image from "next/image";

const talk = () => {
    return(
        <>
            <Head>
                <title>Satify - Let's Talks</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            <Navbar />
            <div className="m-48 text-center text-white text-3xl font-extralight">
                <h1>This is let's Talk page</h1>
            </div>
            <Footer />

        </>
    );
}

export default talk;