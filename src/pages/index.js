import Head from 'next/head'
import Nav from '../components/Nav'
import Splash from '../components/Splash'

function Home(){
  
  return (
    <div>
      <Head>
        <title>VennFX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        
      </Head>

      <div className="z-10 w-full min-h-screen bg-accent1">
        {/* fixed for sticky nav */}
        <div className="w-full">
          <Nav/>
        </div>
          <Splash/>

      </div>

    </div>
  );

}

export default Home;
