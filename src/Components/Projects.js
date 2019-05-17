import React, { Component } from 'react';
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards'

import PersonalWebsite from "../res/personalWebsite.png";
import GisProject from "../res/SIGA_Project.png";
import Design from "../res/Graphic-Design.svg";

import background2 from "../res/background2.svg";
import background1 from "../res/background1.svg";


class Projects extends Component {

    PersonalWebsiteSourceCode = event => {
        const url = 'https://github.com/Gattalraouf/abderraouf-resume';
        window.open(url, '_blank');
    };

    PersonalWebsiteDemo = event => {
        const url = 'https://gattalraouf.github.io/abderraouf-resume/#/';
        window.open(url, '_blank');
    };

    Behance = event => {
        const url = 'https://www.behance.net/AbderraoufGattal';
        window.open(url, '_blank');
    };

    GISApp = event => {
        const url = 'https://github.com/chenineazeddine/GIS-Desktop-web-app';
        window.open(url, '_blank');
    };


    render() {
        return (
            <div className="My-Projects">
                <img className="background2" alt="" src={background2} />
                <div className="Title">
                    <h1 className=" first">My</h1>
                    <h1 className=" second">Projects.</h1>
                </div>
                <h2 className="sub">Goals are dreams with deadlines.</h2>
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-vertical is-7">
                        <div class="tile is-child">
                            <FlippingCard>
                                <FlippingCardFront>
                                    <div className="front-card">
                                        <img className="card-pic" src={PersonalWebsite} alt="" />
                                    </div>
                                </FlippingCardFront>
                                <FlippingCardBack>
                                    <div class="card-content">
                                        <p class="card-title">My Personal Resume</p>
                                        <p class="card-subtitle">A beautiful personal Website</p>
                                        <p className="taging"> <b>Tags:</b> ReactJs, Development, UI/UX Design</p>
                                        <div>
                                            <button className="btns button is-outlined is-my-dark is-rounded" onClick={this.PersonalWebsiteSourceCode}>Code Source</button>
                                            <button className="btns button is-outlined is-my-dark is-rounded" onClick={this.PersonalWebsiteDemo}>Website</button>
                                        </div>
                                    </div>
                                </FlippingCardBack>
                            </FlippingCard>
                        </div>
                        <div class="tile is-child">
                            <FlippingCard>
                                <FlippingCardBack>
                                    <div class="card-content">
                                        <p class="card-title">GIS-App</p>
                                        <p class="card-subtitle">A desktop and web tool app to create geographical information systems (ArcGis alike)</p>
                                        <p className="taging"> <b>Tags:</b> ReactJs, Development, UI/UX Design, redux, electron</p>
                                        <div>
                                            <button className="btns button is-outlined is-my-dark is-rounded" onClick={this.GISApp}>Code Source</button>
                                        </div>
                                    </div>
                                </FlippingCardBack>
                                <FlippingCardFront>
                                    <div className="front-card DesignCard">
                                        <img className="card-pic" src={GisProject} alt="" />
                                    </div>
                                </FlippingCardFront>
                            </FlippingCard>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child">
                            <FlippingCard>
                                <FlippingCardBack>
                                    <div class="card-content">
                                        <p class="card-title">My Design Projects</p>
                                        <p class="card-subtitle">A set of Designs I worked on</p>
                                        <p className="taging"> <b>Tags:</b> UI/UX Design, Graphic Design</p>
                                        <div>
                                            <button className="btns button is-outlined is-my-dark is-rounded" onClick={this.Behance}>Check Them</button>
                                        </div>
                                    </div>
                                </FlippingCardBack>
                                <FlippingCardFront>
                                    <div className="front-card DesignCard">
                                        <img className="card-pic" src={Design} alt="" />
                                    </div>
                                </FlippingCardFront>
                            </FlippingCard>
                        </div>
                    </div>
                </div>
                <img className="background3" alt="" src={background1} />
            </div>
        );
    }

}

export default Projects;
