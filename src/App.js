import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';

function App(){
  return(
    <div>
      <section>
        <Router>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Router>
      </section>
    </div>
  )
}
export default App;
