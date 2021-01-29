import React,{useState, useEffect} from 'react';
import Nav from './Nav';
import Fscreen from './Fscreen';
import Aboutme from './Aboutme';
import Skills from './Skills';
import Mywork from './Mywork';

function App(){
  
  return(
    <div>
      <section>
        <Nav />
        <Fscreen />
        <Aboutme />
        <Skills />
        <Mywork />
      </section>
    </div>
  )
}
export default App;
