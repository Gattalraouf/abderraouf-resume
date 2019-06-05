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
        const url = 'https://drive.google.com/open?id=1xEXqYzQjVhOdTdGmqGTYso6M_4a4rC_u';
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
                <div className="App-body">

                    <SocialMedia />

                    <div className="Text">
                        <p id="Welcoming">Hello, I am</p>
                        <h1 id="MyName">Abderraouf GATTAL</h1>
                        <h1 id="MyProfession"><ReactRotatingText items={MyProfession} /></h1>
                        <div>
                            <button className="button is-outlined is-rounded is-large is-my-dark home-button" onClick={this.handleEvent}>Download My CV</button>
                            <a className="button is-outlined is-rounded is-large is-my-dark home-button" href="#/WhoIam">Know More About Me</a>
                        </div>
                    </div>

                    <img src={CampusExpert} className="App-logo" alt="GitHub Campus Expert" />

                </div>
            </div>
        );
    }

}

export default Home;
