import Head from 'next/head'
import Nav from './components/Nav'
import Splash from './components/Splash'
import Markdown from './components/Markdown'

function VercelTheme(){
    
  return (
    <div>
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

export default VercelTheme;