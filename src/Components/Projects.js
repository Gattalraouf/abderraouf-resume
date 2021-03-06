import React, { Component } from 'react';
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards';
import PersonalWebsite from "../res/personalWebsite.png";
import GisProject from "../res/SIGA_Project.png";
import Design from "../res/Graphic-Design.svg";
import Sayara from "../res/sayaradz.png";
import background2 from "../res/background2.svg";
import wtmWebsite from "../res/WTM.png";


export default function Projects({ id }) {

    function PersonalWebsiteSourceCode() {
        const url = 'https://github.com/Gattalraouf/abderraouf-resume';
        window.open(url, '_blank');
    };

    function PersonalWebsiteDemo() {
        const url = 'https://gattalraouf.github.io/abderraouf-resume/#/';
        window.open(url, '_blank');
    };

    function WTMWebsiteSourceCode() {
        const url = 'https://github.com/WTM-Algiers/WTM-Algiers-Website';
        window.open(url, '_blank');
    };

    function WTMWebsiteDemo() {
        const url = 'https://wtm-algiers.tech';
        window.open(url, '_blank');
    };

    function Behance() {
        const url = 'https://www.behance.net/AbderraoufGattal';
        window.open(url, '_blank');
    };

    function GISApp() {
        const url = 'https://github.com/chenineazeddine/GIS-Desktop-web-app';
        window.open(url, '_blank');
    };

    function SayaraCode() {
        const url = 'https://github.com/sayaradz/sayaradz_android';
        window.open(url, '_blank');
    };


    return (
        <div className="My-Projects" id={id}>
            <img className="background2" alt="" src={background2} />
            <div className="Title">
                <h1 className=" first">My</h1>
                <h1 className=" second">Projects.</h1>
            </div>
            <h2 className="sub">Goals are dreams with deadlines.</h2>
            <div className="tile is-ancestor">
                <div className="tile is-parent is-vertical is-6">
                    <div className="tile is-child">
                        <FlippingCard>
                            <FlippingCardFront>
                                <div className="front-card">
                                    <img className="card-pic" src={PersonalWebsite} alt="" />
                                </div>
                            </FlippingCardFront>
                            <FlippingCardBack>
                                <div className="card-content">
                                    <p className="card-title">My Personal Resume</p>
                                    <p className="card-subtitle">A beautiful personal Website</p>
                                    <p className="taging"> <b>Tags:</b> ReactJs, Development, UI/UX Design</p>
                                    <div>
                                        <button className="btns button is-outlined is-my-dark is-rounded" onClick={PersonalWebsiteSourceCode}>Code Source</button>
                                        <button className="btns button is-outlined is-my-dark is-rounded" onClick={PersonalWebsiteDemo}>Website</button>
                                    </div>
                                </div>
                            </FlippingCardBack>
                        </FlippingCard>
                    </div>
                    <div className="tile is-child">
                        <FlippingCard>
                            <FlippingCardBack>
                                <div className="card-content">
                                    <p className="card-title">GIS-App</p>
                                    <p className="card-subtitle">A desktop and web tool app to create geographical information systems (ArcGis alike)</p>
                                    <p className="taging"> <b>Tags:</b> ReactJs, Development, UI/UX Design, redux, electron</p>
                                    <div>
                                        <button className="btns button is-outlined is-my-dark is-rounded" onClick={GISApp}>Code Source</button>
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
                    <div className="tile is-child">
                        <FlippingCard>
                            <FlippingCardFront>
                                <div className="front-card">
                                    <img className="card-pic" src={wtmWebsite} alt="" />
                                </div>
                            </FlippingCardFront>
                            <FlippingCardBack>
                                <div className="card-content">
                                    <p className="card-title">WTM Algiers Website</p>
                                    <p className="card-subtitle">A beautiful Website</p>
                                    <p className="taging"> <b>Tags:</b> Gatsby, Netlify, Development, UI/UX Design</p>
                                    <div>
                                        <button className="btns button is-outlined is-my-dark is-rounded" onClick={WTMWebsiteSourceCode}>Code Source</button>
                                        <button className="btns button is-outlined is-my-dark is-rounded" onClick={WTMWebsiteDemo}>Website</button>
                                    </div>
                                </div>
                            </FlippingCardBack>
                        </FlippingCard>
                    </div>
                </div>
                <div className="tile is-parent is-vertical">
                    <div className="tile is-child">
                        <FlippingCard>
                            <FlippingCardBack>
                                <div className="card-content">
                                    <p className="card-title">My Design Projects</p>
                                    <p className="card-subtitle">A set of Designs I worked on</p>
                                    <p className="taging"> <b>Tags:</b> UI/UX Design, Graphic Design</p>
                                    <div>
                                        <button className="btns button is-outlined is-my-dark is-rounded" onClick={Behance}>Check Them</button>
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
                    <div className="tile is-child">
                        <FlippingCard>
                            <FlippingCardBack>
                                <div className="card-content">
                                    <p className="card-title">Sayara DZ</p>
                                    <p className="card-subtitle">A mobile App that covers the Selling and buying of both new and used cars.</p>
                                    <p className="taging"> <b>Tags:</b> UI/UX Design, Android, E-commerce</p>
                                    <div>
                                        <button className="btns button is-outlined is-my-dark is-rounded" onClick={SayaraCode}>Code</button>
                                    </div>
                                </div>
                            </FlippingCardBack>
                            <FlippingCardFront>
                                <div className="front-card">
                                    <img className="card-pic" src={Sayara} alt="" />
                                </div>
                            </FlippingCardFront>
                        </FlippingCard>
                    </div>
                    <div className="tile is-child">
                   
                    </div>
                </div>


            </div>
        </div>
    );


}

