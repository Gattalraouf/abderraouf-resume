import React, { Component } from 'react';
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Articles from './Articles';
import Talks from './Talks';
import Footer from './Footer';
import NavMenu from './NavMenu';

class Main extends Component {


    render() {
        return (
            <div>
                <NavMenu/>
                <About id="About-Me"/>
                <Experiences/>
                <Projects id="My-Projects"/>
                <Articles/>
                <Talks/>
                <Footer/>
            </div>
        );
    }

}

export default Main;
