import React from 'react';
import Nav from './Nav';
import Fscreen from './Fscreen';
import Aboutme from './Aboutme';
import Skills from './Skills';
import Mywork from './Mywork';

//https://www.youtube.com/watch?v=a9zj9XuzKF8
//https://youtu.be/a9zj9XuzKF8
    
class App extends React.Component{
  render(){
    return(
      <section>
        <Nav />
        <Fscreen />
        <Aboutme />
        <Skills />
        <Mywork />
      </section>
    )
  }
}
export default App;
