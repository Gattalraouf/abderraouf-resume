import React, { Component } from 'react';
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Articles from './Articles';

class Main extends Component {


    render() {
        return (
            <div>
                <About id="About-Me"/>
                <Experiences/>
                <Projects id="My-Projects"/>
                <Articles id="My-Projects"/>
            </div>
        );
    }

}

export default Main;
