import React, { Component } from 'react';
import GitHub from '../res/github.svg';
import LinkedIn from '../res/linkedin.svg';
import Medium from '../res/medium.svg';
import Behance from '../res/behance.svg';
import Twitter from '../res/twitter.svg';

class Footer extends Component {


    render() {
        return (
            <div className="Footer">
                <div class="content has-text-centered">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Gattalraouf">
                        <img src={GitHub} className="footer-social_media" alt="Abderraouf on GitHub" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/GattalRaouf">
                        <img src={Twitter} className="footer-social_media" alt="Abderraouf on Twitter" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/AbderraoufGattal">
                        <img src={Behance} className="footer-social_media" alt="Abderraouf on Behance" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@Abderraouf">
                        <img src={Medium} className="footer-social_media" alt="Abderraouf on Medium" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abderraouf-gattal/">
                        <img src={LinkedIn} className="footer-social_media" alt="Abderraouf on LinkedIn" />
                    </a>
                </div>

                <div class="content has-text-centered">
                    <p> © Copyrights 2019</p>
                    <p>All rights reserved to Abderraouf GATTAL</p>
                </div>
            </div>
        );
    }

}

export default Footer;
