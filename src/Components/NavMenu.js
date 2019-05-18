import React, { Component } from 'react';

class NavMenu extends Component {

    constructor(props) {
        super(props);
        this.clickHamburger = this.clickHamburger.bind(this);
        this.state = {
            active: false
        };
    }


    clickHamburger() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render() {
        return (
            <div className="Menu">
                <div className="Menu-container box">
                    <nav class="navbar" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand">
                            <a role="button" onClick={this.clickHamburger} className={this.state.active ? 'is-active navbar-burger burger' : 'navbar-burger burger'} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div className={this.state.active ? 'is-active navbar-menu' : 'navbar-menu'} >
                            <div class="navbar-start">
                                <a class="navbar-item is-activated" href="./">Home</a>
                                <a class="navbar-item" href="#/hello#About-Me">About Me</a>
                                <a class="navbar-item" href="hello#My-Experiences">My Experiences</a>
                                <a class="navbar-item" href="#/hello#My-Projects">My Projects</a>
                                <a class="navbar-item" href="hello#articles">My Articles</a>
                                <a class="navbar-item" href="hello#talks">My Talks</a>
                            </div>
                            <div class="navbar-end has-text-centered">
                                <a class="button is-my-dark is-rounded is-outlined ">
                                    <strong>Download My CV</strong>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }

}

export default NavMenu;
