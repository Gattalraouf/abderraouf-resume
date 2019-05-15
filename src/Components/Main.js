import React, { Component } from 'react';
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";

class Main extends Component {


    render() {
        return (
            <div>
                <About/>
                <Experiences/>
                <Projects/>
            </div>
        );
    }

}

export default Main;
