import Head from 'next/head'
import Nav from '../components/Nav'
import Splash from '../components/Splash'
import Markdown from '../components/Markdown'

function Home(){
  
  return (
    <div>
      <Head>
        <title>VennFX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        
      </Head>

      <div className="w-full" >
        {/* fixed for sticky nav */}
        <div className="bg-accent1">
          <Nav/>
          <Splash/>
        </div>
        <Markdown/>
      </div>

    </div>
  );

}

export default Home;
