import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import LandingPage from './pages/LandingPage/LandingPage' ;
import Authentification from './pages/Authentification/Authentification';
import Test from './pages/Test/Test.js';
import Home from './pages/Home/Home.js' ;
import InsertImage from './pages/InsertImage/InsertImage.js' ;

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={LandingPage}/>
          <Route path="/Home" exact component={Home}/>
          <Route path="/Authentification" exact component={Authentification}/>
          <Route path="/LandingPage" exact component={LandingPage}/>
          <Route path="/InsertImage" exact component={InsertImage}/>          
          <Route path="/Test" exact component={Test}/>

        </Switch>
      </BrowserRouter>
    </>
  );

};

export default App;