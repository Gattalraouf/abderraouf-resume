import React, { Component } from 'react';
import background1 from "../res/background1.svg";

import Android from "../res/skills-logos/android.svg";
import Database from "../res/skills-logos/database.svg";
import Git from "../res/skills-logos/Git.svg";
import Illustrator from "../res/skills-logos/Illustrator.svg";
import Java from "../res/skills-logos/java.svg";
import Kotlin from "../res/skills-logos/kotlin.svg";
import Reactjs from "../res/skills-logos/React.svg";
import XD from "../res/skills-logos/XD.svg";

class Skills extends Component {

    render() {
        return (
            <div className="skills-section">
                <div className="Title">
                    <h1 className=" first">My</h1>
                    <h1 className=" second">Skills.</h1>
                </div>
                <h2 className="sub">Unless you try to do something beyond what you have already mastered, you will never grow.</h2>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child has-text-centered skill-element">
                            <img src={Android} alt="Android Development" />
                            <h3>Android</h3>
                            <p>UI, Logic and Testing</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child has-text-centered skill-element">
                            <img src={Java} alt="Coding with Java" />
                            <h3>Java</h3>
                            <p>Coding Language</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child has-text-centered skill-element">
                            <img src={Kotlin} alt="Coding with Kotlin" />
                            <h3>Kotlin</h3>
                            <p>Coding Language</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child has-text-centered skill-element">
                            <img src={Reactjs} alt="Coding with JS" />
                            <h3>React</h3>
                            <p>Web Development, Redux, JS, Html and Css</p>
                        </article>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child has-text-centered skill-element">
                            <img src={Git} alt="Version Control" />
                            <h3>Git</h3>
                            <p>Version Control</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child has-text-centered skill-element">
                            <img src={Database} alt="Databases" />
                            <h3>Databases</h3>
                            <p>My-Sql, SqLite, firebase</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child has-text-centered skill-element">
                            <img src={XD} alt="UX Design with XD" />
                            <h3>XD</h3>
                            <p>Prototyping, UI/UX Desing</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child has-text-centered skill-element">
                            <img src={Illustrator} alt="Ui Desing with illustrator" />
                            <h3>Illustrator</h3>
                            <p>Graphic Design, UI Design</p>
                        </article>
                    </div>
                </div>
                <img className="background3" alt="" src={background1} />
            </div>
        );
    }

}

export default Skills;
