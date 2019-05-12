import React, { Component } from 'react';
import CampusExpert from './res/GCE.svg';
import GitHub from './res/github.svg';
import LinkedIn from './res/linkedin.svg';
import Medium from './res/medium.svg';
import Behance from './res/behance.svg';
import Twitter from './res/twitter.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleEvent = event => {
    const url = 'https://drive.google.com/file/d/17QbkScF4RExOwqH9HcHT_m_FpcS4F5am/view?usp=sharing';
    window.open(url, '_blank');
  };

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    var ReactRotatingText = require('react-rotating-text');
    const MyProfession = ['Software Engineering Student', 'Software Developer', 'GitHub Campus Expert', 'GDG Algiers Co-Organizer'];
    return (
      <div className="App">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
              <a class="button is-text">Home</a>
              <a class="button is-text">About</a>
              <a class="button is-text">Projects</a>
              <a class="button is-text">Articles</a>
              <a class="button is-text">Talks</a>
            </div>
          </div>
        </nav>
        <header className="App-body">
          <div className="SocialMedia">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Gattalraouf">
              <img src={GitHub} className="Social-Media-Button" alt="Abderraouf on GitHub" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/GattalRaouf">
              <img src={Twitter} className="Social-Media-Button" alt="Abderraouf on Twitter" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/AbderraoufGattal">
              <img src={Behance} className="Social-Media-Button" alt="Abderraouf on Behance" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@Abderraouf">
              <img src={Medium} className="Social-Media-Button" alt="Abderraouf on Medium" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abderraouf-gattal/">
              <img src={LinkedIn} className="Social-Media-Button" alt="Abderraouf on LinkedIn" />
            </a>
          </div>
          <div className="Text">
            <p id="Welcoming">Hello, I am</p>
            <h1 id="MyName">Abderraouf GATTAL</h1>
            <h1 id="MyProfession"><ReactRotatingText items={MyProfession} /></h1>

            <button className="button is-outlined is-rounded is-large is-my-dark" onClick={this.handleEvent}>Download My CV</button>
          </div>
          <img src={CampusExpert} className="App-logo" alt="GitHub Campus Expert" />
        </header>
      </div>
    );
  }

}

export default App;
