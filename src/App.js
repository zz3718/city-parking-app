import React from 'react';
import { Button } from 'antd-mobile';
import Footer from './components/footer/footer'
import Home from './components/Home/home'
import Parking from './components/Parking/parking'
import Navigation from './components/Navigation/navigation'
import Person from './components/Person/person'

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     hello
     <Button type="primary" inline style={{ marginRight: '4px' }} size="small">按钮</Button>
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
