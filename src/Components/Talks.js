import React, { Component } from 'react';


function Git(event) {
    const url = 'https://gattalraouf.github.io/Git-GitHub-Talk/';
    window.open(url, '_blank');
};

function Android(event) {
    const url = 'https://www.slideshare.net/fa_gattal/gdg-school-android-workshop';
    window.open(url, '_blank');
};

function UX(event) {
    const url = 'https://www.slideshare.net/fa_gattal/from-an-idea-to-a-prototype';
    window.open(url, '_blank');
};
export default function Talks({ id }) {

    return (
        <div id={id}>
            <div className="Title">
                <h1 className=" first">My</h1>
                <h1 className=" second">Talks.</h1>
            </div>
            <h2 className="sub">A true dreamer is one who knows how to navigate in the dark.</h2>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="card-title">Understand Android Basics</p>
                        <p className="card-subtitle">A small talk covering the basics</p>
                        <div className="ReadMore-Container">
                            <button className="button is-text is-rounded read" onClick={Android}>Check Slides</button>
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="card-title">From an idea to a prototype</p>
                        <p className="card-subtitle">A small talk covering some basics of UX basics</p>
                        <div className="ReadMore-Container">
                            <button className="button is-text is-rounded read" onClick={UX}>Check Slides</button>
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="card-title">Git and GitHub</p>
                        <p className="card-subtitle">A small talk covering the basics (concepts, commands and workflow)</p>
                        <div className="ReadMore-Container">
                            <button className="button is-text is-rounded read" onClick={Git}>Check Slides</button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

