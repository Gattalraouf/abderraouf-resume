import React, { Component } from 'react';
import Home from './Components/Home';
import SignIn from './Components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )} />
          <Route exact={true} path='/signin' render={() => (
            <div className="App">
              <SignIn />
            </div>
          )} />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
