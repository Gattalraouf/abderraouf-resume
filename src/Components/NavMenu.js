import React, { Component } from 'react';

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
        const url = 'https://drive.google.com/file/d/17QbkScF4RExOwqH9HcHT_m_FpcS4F5am/view?usp=sharing';
        window.open(url, '_blank');
    };


    clickHamburger() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    GotoItem = e => {
        const el = e.target;
        this.props.onMenuClick(el.id);
    };


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
                            <a className="navbar-item" id="1" onClick={this.GotoItem}>About Me</a>
                            <a className="navbar-item" id="2" onClick={this.GotoItem}>My Experiences</a>
                            <a className="navbar-item" id="3" onClick={this.GotoItem}>My Projects</a>
                            <a className="navbar-item" id="4" onClick={this.GotoItem}>My Articles</a>
                            <a className="navbar-item" id="5" onClick={this.GotoItem}>My Talks</a>
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
