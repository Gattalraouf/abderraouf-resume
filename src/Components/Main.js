import React, { Component } from 'react';
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Articles from './Articles';
import Talks from './Talks';

class Main extends Component {


    render() {
        return (
            <div>
                <About id="About-Me"/>
                <Experiences/>
                <Projects id="My-Projects"/>
                <Articles/>
                <Talks/>
            </div>
        );
    }

}

export default Main;
