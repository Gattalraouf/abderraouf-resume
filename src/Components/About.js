import React, { Component } from 'react';
import Me from '../res/me.svg';
import background1 from '../res/background1.svg';

class About extends Component {


    render() {
        return (
            <div className="About-Me">
                <div className="filler"></div>
                <img className="background" alt="" src={background1}/>
                <div className="Title">
                    <h1 className=" first">About</h1>
                    <h1 className=" second">Me.</h1>
                </div>
                <h2 className="sub">Here’s my story for the history books.</h2>
                <div className="Bio-Zone">
                    <div className="Bio-Text">
                        <p className="Bio">
                        Software Engineering Student, GDG Algiers Co-Organizer, GitHub Campus Expert and Software Developer not to 
                        mention my passion toward UX/UI and graphic Design.</p>
                        <p className="Bio">Focusing all my effort on the impact I can leave on this world someday and making software
                        development accessible for everyone.</p>
                        <p className="Bio">Hoping to make something that impresses my Mum and raises to my family's expectations.</p>
                    </div>
                    <img className="My-Image" alt="Abderraouf GATTAL" src={Me}></img>
                </div>
            </div>
        );
    }

}

export default About;
