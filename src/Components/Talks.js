import React, { Component } from 'react';

class Talks extends Component {


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
                            <p class="card-title">Git and GitHub</p>
                            <p class="card-subtitle">Application, Activity and Lifecycle</p>
                            <div className="ReadMore-Container">
                                <button className="button is-text is-rounded read" onClick={this.Article2}>Check Slides</button>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="card-title">Understand Android Basics</p>
                            <p class="card-subtitle">UI is all what matters to the user</p>
                            <div className="ReadMore-Container">
                                <button className="button is-text is-rounded read" onClick={this.Article3}>Check Slides</button>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }

}

export default Talks;
