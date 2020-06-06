import Head from 'next/head'
import Nav from '../components/Nav'

function Home(){
  
  return (
    <div>
      <Head>
        <title>VennFX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        
      </Head>
      
      <Nav/>
      <div className="w-full min-h-screen bg-accent1">
        
      </div>
      

    </div>
  );

}

export default Home;
