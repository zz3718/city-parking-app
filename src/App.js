import React from 'react';
// import { Button } from 'antd-mobile';
import Footer from './components/footer/footer'
import Home from './pages/Home/home'
import Parking from './pages/Parking/parking'
import Navigation from './pages/Navigation/navigation'
import Person from './pages/Person/person'

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
       <Footer/>
       <Switch>
        <Route exact strict path="/home">
            <Home />
        </Route>
        <Route exact strict path="/parking">
            <Parking />
        </Route>
        <Route exact strict path="/navigation">
            <Navigation />
        </Route>
        <Route exact strict path="/person">
            <Person />
        </Route>
       </Switch>
     </Router>
     
     
    </div>
  );
}

export default App;
