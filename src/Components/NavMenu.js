import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class NavMenu extends Component {

    constructor(props) {
        super(props);
        this.clickHamburger = this.clickHamburger.bind(this);
        this.state = {
            active: false,
            activeLink: 1
        };
    }

    handleEvent = event => {
        const url = 'https://drive.google.com/open?id=1xEXqYzQjVhOdTdGmqGTYso6M_4a4rC_u';
        window.open(url, '_blank');
    };


    clickHamburger() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }


    render() {
        return (

            <div className="Menu-container box">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a role="button" onClick={this.clickHamburger} className={this.state.active ? 'is-active navbar-burger burger' : 'navbar-burger burger'} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className={this.state.active ? 'is-active navbar-menu' : 'navbar-menu'} >
                        <div className="navbar-start">
                            <a className="navbar-item" href="./">Home</a>
                            <Link
                                className="navbar-item"
                                activeClass="is-activated"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About Me
                            </Link>
                            <Link
                                className="navbar-item"
                                activeClass="is-activated"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={500}
                            >
                                My Experiences
                            </Link>
                            <Link
                                className="navbar-item"
                                activeClass="is-activated"
                                to="section3"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                My Projects
                            </Link>
                            <Link
                                className="navbar-item"
                                activeClass="is-activated"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={20}
                                duration={500}
                            >
                                My Skills
                            </Link>
                            <Link
                                className="navbar-item"
                                activeClass="is-activated"
                                to="section5"
                                spy={true}
                                smooth={true}
                                offset={20}
                                duration={500}
                            >
                                My Articles
                            </Link>
                            <Link
                                className="navbar-item"
                                activeClass="is-activated"
                                to="section6"
                                spy={true}
                                smooth={true}
                                offset={35}
                                duration={500}
                            >
                                My Talks
                            </Link>
                        </div>
                        <div className="navbar-end has-text-centered">
                            <a className="button is-my-dark is-rounded is-outlined " onClick={this.handleEvent}>
                                <strong>Download My CV</strong>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }

}

export default NavMenu;
