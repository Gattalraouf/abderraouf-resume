import React, { Component } from 'react';
import GitHub from '../res/github.svg';
import LinkedIn from '../res/linkedin.svg';
import Medium from '../res/medium.svg';
import Behance from '../res/behance.svg';
import Twitter from '../res/twitter.svg';

class SocialMedia extends Component {

    render() {
        return (
            <div className="SocialMedia">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Gattalraouf">
                    <img src={GitHub} className="Social-Media-Button" alt="Abderraouf on GitHub" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/GattalRaouf">
                    <img src={Twitter} className="Social-Media-Button" alt="Abderraouf on Twitter" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/AbderraoufGattal">
                    <img src={Behance} className="Social-Media-Button" alt="Abderraouf on Behance" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@Abderraouf">
                    <img src={Medium} className="Social-Media-Button" alt="Abderraouf on Medium" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abderraouf-gattal/">
                    <img src={LinkedIn} className="Social-Media-Button" alt="Abderraouf on LinkedIn" />
                </a>
            </div>
        );
    }

}

export default SocialMedia;
