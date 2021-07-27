import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Authentification from './pages/Authentification/Authentification';


const App = () => {

  

  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Authentification}/>
          <Route path="/LandingPage" exact component={LandingPage}/>
          
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;