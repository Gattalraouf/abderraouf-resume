import React, { Component } from 'react';
import Me from '../res/me.svg';
import background1 from '../res/background1.svg';

class About extends Component {


    render() {
        return (
            <div id="About-Me" className="About-Me">
                <img className="background" alt="" src={background1}/>
                <div className="Title">
                    <h1 className=" first">About</h1>
                    <h1 className=" second">Me.</h1>
                </div>
                <h2 className="sub">Here’s my story for the history books.</h2>
                <div className="Bio-Zone">
                    <div className="Bio-Text">
                        <p className="Bio">Abderraouf GATTAL, a Software Engineering Student, a GDG Algiers Co-Organizer,
                        GitHub Campus Expert and an Android Developer not to mention his passion toward  UX/UI and graphic
                        Design.</p>
                        <p className="Bio">Focusing all his effort on the impact he can leave on this world someday.</p>
                        <p className="Bio">He hopes to make something that impresses his Mum and raises to his family's expectations.</p>
                    </div>
                    <img className="My-Image" alt="Abderraouf GATTAL" src={Me}></img>
                </div>
            </div>
        );
    }

}

export default About;
