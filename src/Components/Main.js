import React, { Component } from 'react';
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Articles from './Articles';
import Talks from './Talks';
import Footer from './Footer';
import NavMenu from './NavMenu';
import Skills from './Skills';

class Main extends Component {
    constructor(props) {
        super(props);
        this.about = React.createRef();
        this.experiences = React.createRef();
        this.projects = React.createRef();
        this.articles = React.createRef();
        this.talks = React.createRef();
        this.skills = React.createRef();
    }

    render() {
        return (
            <div>
                <NavMenu onMenuClick={this.onMenuClick} />
                <About id="section1" />
                <Experiences id="section2"/>
                <Projects id="section3"/>
                <Skills id="section4"/>
                <Articles id="section5"/>
                <Talks id="section6"/>
                <Footer />
            </div>
        );
    }

}

export default Main;
