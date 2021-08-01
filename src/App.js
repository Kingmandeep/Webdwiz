import React from 'react'
import About from './About'
import { Route,Switch } from 'react-router-dom';
import Home from './Home'
import Service from './Service';
import Contactus from './Contactus';



 const App = () => {
    return (
        <>
          <Switch>
              <Route exact path ="/" component={Home}></Route>
              <Route exact path ="/about" component={About}></Route>
              <Route exact path ="/service" component={Service}></Route>
              <Route exact path ="/contact" component={Contactus}></Route>
          </Switch>
           
          
        </>
    )
}
export default App;
