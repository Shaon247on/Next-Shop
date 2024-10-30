import Head from "next/head";

const Banner = () => {
    return (
        <>
        <Head>
            <title>Urban Chic || Banner</title>
            <meta name="Discover Your Style" content="Explore our exclusive collections designed to reflect your unique personality. Dive into a world of fashion where every piece tells your story!" />
        </Head>
            <div>
                <div className={`bg-banner bg-no-repeat bg-cover bg-center w-full h-[100vh] flex justify-center items-center`}>
                    <div className='w-full h-full bg-light/40 absolute z-[0]' />
                    <div className="z-10 text-center">
                        <h1 className='xl:text-[120px] text-deep font-cinzel font-bold'>Unleash Your <br /> Unique Style</h1>
                        <p className="xl:text-4xl font-open text-black/70 font-medium xl:w-[1100px] xl:mt-4">Discover exclusive collections tailored to your individuality. Elevate your look with trends that inspire and quality that lasts.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;