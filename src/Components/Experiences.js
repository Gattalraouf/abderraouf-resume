import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Undergraduate from "../res/undergraduate.svg";
import CoOrganizer from "../res/GDGCOOrganizer.svg";
import GCE from "../res/GCE1.svg";
import Intern1 from "../res/intern1.svg";
import Intern2 from "../res/intern2.svg";
import StudyIcon from "../res/study-icon.svg";
import WorkIcon from "../res/portfolio.svg";
import TalkIcon from "../res/talk.svg";
import ShipIcon from "../res/ship.svg";

export default function Experiences({ id }) {

    return (
        <div className="My-Experiences" id={id}>
            <div className="Title">
                <h1 className=" first">My</h1>
                <h1 className=" second">Experiences.</h1>
            </div>
            <h2 className="sub">I might not be where I want to be yet, but I get closer everyday.</h2>

            <div className="Time-Line">
                <VerticalTimeline className="test">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2015 - 2021"
                        iconStyle={{ background: '#d61e3c', color: '#fff' }}
                        icon={<img className="Icon" alt="" src={StudyIcon} />}
                    >
                        <h1 className="vertical-timeline-element-title">Computer Science Undergraduate</h1>
                        <h5 className="vertical-timeline-element-subtitle">ESI | Ecole nationale Superieure d'Informatique</h5>
                        <p id="Specialization">Specialization: Software Engineering</p>
                        <p>Algiers, Algeria</p>
                        <img className="Time-Line-Pic" alt="" src={Undergraduate} />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="03/01/2019 - Present"
                        iconStyle={{ background: '#084C61', color: '#fff' }}
                        icon={<img className="Icon" alt="" src={TalkIcon} />}
                    >
                        <h1 className="vertical-timeline-element-title">Campus Expert</h1>
                        <h5 className="vertical-timeline-element-subtitle">GitHub</h5>
                        <p id="Specialization">Specialization: Communities, Leadership, Public Speaking, Mentoring</p>
                        <img className="Time-Line-Pic" alt="" src={GCE} />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="01/08/2018 - Present"
                        iconStyle={{ background: '#084C61', color: '#fff' }}
                        icon={<img className="Icon" alt="" src={TalkIcon} />}
                    >
                        <h1 className="vertical-timeline-element-title">Co-Organizer</h1>
                        <h5 className="vertical-timeline-element-subtitle">GDG Algiers</h5>
                        <p id="Specialization">Specialization: Communities, Leadership, Public Speaking, Mentoring</p>
                        <p>Algiers, Algeria</p>
                        <img className="Time-Line-Pic" alt="" src={CoOrganizer} />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="12/08/2018 - 17/09/2018"
                        iconStyle={{ background: '#d61e3c', color: '#fff' }}
                        icon={<img className="Icon" alt="" src={WorkIcon} />}
                    >
                        <h1 className="vertical-timeline-element-title">Intern | Security Engineer</h1>
                        <h5 className="vertical-timeline-element-subtitle">SSRI</h5>
                        <p id="Specialization">Specialization: Cyber Security</p>
                        <p>Algiers, Algeria</p>
                        <img className="Time-Line-Pic" alt="" src={Intern2} />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="12/08/2018 - 17/09/2018"
                        iconStyle={{ background: '#d61e3c', color: '#fff' }}
                        icon={<img className="Icon" alt="" src={WorkIcon} />}
                    >
                        <h1 className="vertical-timeline-element-title">Intern | Engineer</h1>
                        <h5 className="vertical-timeline-element-subtitle">Somiphos</h5>
                        <p id="Specialization">Specialization: Information System</p>
                        <p>Tebessa, Algeria</p>
                        <img className="Time-Line-Pic" alt="" src={Intern1} />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: '#084C61', color: '#fff' }}
                        icon={<img className="Icon" alt="" src={ShipIcon} />}
                    />

                </VerticalTimeline>
            </div>

        </div>
    );

}
