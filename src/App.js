import React, { Component } from 'react';
import Home from './Components/Home';
import Main from './Components/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div>
              <Home />
            </div>
          )} />
          <Route exact={true} path='/Hello' render={() => (
            <div className="App">
              <Main />
            </div>
          )} />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
