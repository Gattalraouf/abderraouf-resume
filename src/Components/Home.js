import React, { Component } from 'react';
import CampusExpert from '../res/GCE.svg';
import SocialMedia from './SocialMedia';

class Home extends Component {

    constructor(props) {
        super(props);
        this.clickHamburger = this.clickHamburger.bind(this);
        this.state = {
            open: false,
            active: false
        };
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

    clickHamburger() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render() {
        var ReactRotatingText = require('react-rotating-text');
        const MyProfession = ['Software Engineering Student', 'Software Developer', 'GitHub Campus Expert', 'GDG Algiers Co-Organizer'];
        return (
            <div className="Home">
            
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a role="button" onClick={this.clickHamburger} className={this.state.active ? 'is-active navbar-burger burger' : 'navbar-burger burger'} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" className={this.state.active ? 'is-active navbar-menu' : 'navbar-menu'} >
                        <div class="navbar-end">
                            <a class="navbar-item is-activated" href="./">Home</a>
                            <a class="navbar-item" href="#/hello#About-Me">About Me</a>
                            <a class="navbar-item" href="hello#My-Experiences">My Experiences</a>
                            <a class="navbar-item" href="#/hello#My-Projects">My Projects</a>
                            <a class="navbar-item" href="hello#articles">My Articles</a>
                            <a class="navbar-item" href="hello#talks">My Talks</a>
                        </div>
                    </div>
                </nav>

                <body className="App-body">

                    <SocialMedia/>

                    <div className="Text">
                        <p id="Welcoming">Hello, I am</p>
                        <h1 id="MyName">Abderraouf GATTAL</h1>
                        <h1 id="MyProfession"><ReactRotatingText items={MyProfession} /></h1>
                        <button className="button is-outlined is-rounded is-large is-my-dark" onClick={this.handleEvent}>Download My CV</button>
                    </div>

                    <img src={CampusExpert} className="App-logo" alt="GitHub Campus Expert" />

                </body>
            </div>
        );
    }

}

export default Home;
