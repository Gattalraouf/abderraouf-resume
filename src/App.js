import React, { Component } from 'react';
import Home from './Components/Home';
import Main from './Components/Main';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {


  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact={true} path='/' render={() => (
            <div>
              <Home/>
            </div>
          )} />
          <Route exact={true} path='/WhoIam' render={() => (
            <div className="App">
              <Main/>
            </div>
          )} />
        </div>
      </HashRouter>
    );
  }

}

export default App;
