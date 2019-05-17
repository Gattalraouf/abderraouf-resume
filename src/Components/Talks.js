import React, { Component } from 'react';

class Talks extends Component {

    Git = event => {
        const url = 'https://gattalraouf.github.io/Git-GitHub-Talk/';
        window.open(url, '_blank');
    };

    Android = event => {
        const url = 'https://www.slideshare.net/fa_gattal/gdg-school-android-workshop';
        window.open(url, '_blank');
    };

    UX = event => {
        const url = 'https://www.slideshare.net/fa_gattal/from-an-idea-to-a-prototype';
        window.open(url, '_blank');
    };

    render() {
        return (
            <div>
                <div className="Title">
                    <h1 className=" first">My</h1>
                    <h1 className=" second">Talks.</h1>
                </div>
                <h2 className="sub">Here’s my story for the history books.</h2>
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="card-title">Understand Android Basics</p>
                            <p class="card-subtitle">A small talk covering the basics</p>
                            <div className="ReadMore-Container">
                                <button className="button is-text is-rounded read" onClick={this.Android}>Check Slides</button>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="card-title">From an idea to a prototype</p>
                            <p class="card-subtitle">A small talk covering some basics of UX basics</p>
                            <div className="ReadMore-Container">
                                <button className="button is-text is-rounded read" onClick={this.UX}>Check Slides</button>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="card-title">Git and GitHub</p>
                            <p class="card-subtitle">A small talk covering the basics (concepts, commands and workflow)</p>
                            <div className="ReadMore-Container">
                                <button className="button is-text is-rounded read" onClick={this.Git}>Check Slides</button>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }

}

export default Talks;
