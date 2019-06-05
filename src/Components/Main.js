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
        this.onMenuClick = this.onMenuClick.bind(this);
        this.about = React.createRef();
        this.experiences = React.createRef();
        this.projects = React.createRef();
        this.articles = React.createRef();
        this.talks = React.createRef();
        this.skills = React.createRef();
    }

    onMenuClick(choice) {
        if (choice == 1) {
            window.scrollTo({
                top: this.about.current.offsetTop,
                left: 0,
                behavior: "smooth"
            });
        }
        else if (choice == 2) {
            window.scrollTo({
                top: this.experiences.current.offsetTop,
                left: 0,
                behavior: "smooth"
            });
        }
        else if (choice == 3) {
            window.scrollTo({
                top: this.projects.current.offsetTop,
                left: 0,
                behavior: "smooth"
            });
        }
        else if (choice == 4) {
            window.scrollTo({
                top: this.skills.current.offsetTop,
                left: 0,
                behavior: "smooth"
            });
        }
        else if (choice == 5) {
            window.scrollTo({
                top: this.articles.current.offsetTop,
                left: 0,
                behavior: "smooth"
            });
        }
        else if (choice == 6) {
            window.scrollTo({
                top: this.talks.current.offsetTop,
                left: 0,
                behavior: "smooth"
            });
        }
    }


    render() {
        return (
            <div>
                <NavMenu onMenuClick={this.onMenuClick} />
                <div ref={this.about}></div>
                <About />
                <div ref={this.experiences}></div>
                <Experiences />
                <div ref={this.projects}></div>
                <Projects />
                <div ref={this.skills}></div>
                <Skills />
                <div ref={this.articles}></div>
                <Articles />
                <div ref={this.talks}></div>
                <Talks />
                <Footer />
            </div>
        );
    }

}

export default Main;
