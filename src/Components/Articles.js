import React, { Component } from 'react';


export default function Articles({ id }) {

    function Article1(){
        const url = 'https://medium.com/@Abderraouf/gdg-algiers-a-story-of-passion-fun-and-addiction-4bfece1c4419';
        window.open(url, '_blank');
    };
    
    function Article2 (){
        const url = 'https://medium.com/@Abderraouf/understand-android-basics-part-1-application-activity-and-lifecycle-b559bb1e40e';
        window.open(url, '_blank');
    };
    
    function Article3 (){
        const url = 'https://medium.com/@Abderraouf/understand-android-basics-part-2-ui-is-all-what-matters-to-the-user-xml-android-6492c434a850';
        window.open(url, '_blank');
    };
    
    function Article4 () {
        const url = 'https://medium.com/@Abderraouf/understand-android-basics-part-3-ui-is-all-what-matters-to-the-user-views-viewgroups-c503017c3cb4';
        window.open(url, '_blank');
    };
    
    function Article5 (){
        const url = 'https://medium.com/@Abderraouf/design-secrets-to-make-your-design-better-for-beginners-139983bfa1df';
        window.open(url, '_blank');
    };
    
    function Git_Universe(){
        const url = 'https://medium.com/@Abderraouf/git-an-entire-universe-to-explore-120430d63f84';
        window.open(url, '_blank');
    };

    return (
        <div className="My-Articles" id={id}>
            <div className="Title">
                <h1 className=" first">My</h1>
                <h1 className=" second">Articles.</h1>
            </div>
            <h2 className="sub">You can always edit a bad page. You can’t edit a blank page.</h2>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="card-title">GDG Algiers, A story of Passion, Fun and Addiction…</p>
                        <p className="card-subtitle">The title says it all!!!</p>
                        <div className="ReadMore-Container">
                            <button className="button is-text is-rounded read" onClick={Article1}>Read More</button>
                        </div>
                    </article>
                </div>
            </div>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="card-title">Understand Android Basics 1</p>
                        <p className="card-subtitle">Application, Activity and Lifecycle</p>
                        <div className="ReadMore-Container">
                            <button className="button is-text is-rounded read" onClick={Article2}>Read More</button>
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="card-title">Understand Android Basics 2</p>
                        <p className="card-subtitle">UI is all what matters to the user (XML and Android)</p>
                        <div className="ReadMore-Container">
                            <button className="button is-text is-rounded read" onClick={Article3}>Read More</button>
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="card-title">Understand Android Basics 3</p>
                        <p className="card-subtitle">UI is all what matters to the user (Views and ViewGroups)</p>
                        <div className="ReadMore-Container">
                            <button className="button is-text is-rounded read" onClick={Article4}>Read More</button>
                        </div>
                    </article>
                </div>
            </div>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="card-title">Design: Secrets to make your Design better</p>
                        <p className="card-subtitle">Few tricks that may help design beginners! </p>
                        <div className="ReadMore-Container">
                            <button className="button is-text is-rounded read" onClick={Article5}>Read More</button>
                        </div>
                    </article>
                </div>
            </div>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="card-title">Git, an entire universe to explore</p>
                        <p className="card-subtitle">Grow your wits sharper, and explore it all !!!</p>
                        <div className="ReadMore-Container">
                            <button className="button is-text is-rounded read" onClick={Git_Universe}>Read More</button>
                        </div>
                    </article>
                </div>
            </div>

        </div>
    );

}
