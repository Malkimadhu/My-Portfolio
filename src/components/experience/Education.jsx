import React from 'react';
import './education.css';



// Education Component
const Education = () => {
    // TimelineItem Component
const TimelineItem = ({ yearRange, degree, university, location, description, specialLine }) => {
    return (
        <div className="col-sm-4">
            <div className="single-horizontal-timeline">
                <div className="experience-time">
                    <h2>{yearRange}</h2>
                    <h3>{degree}</h3>
                </div>
                <div className="timeline-horizontal-border">
                <i class="uil uil-circle"></i>
                    <span className={`single-timeline-horizontal ${specialLine ? 'spacial-horizontal-line' : ''}`}></span>
                </div>
                <div className="timeline">
                    <div className="timeline-content">
                        <h4 className="title">{university}</h4>
                        <h5>{location}</h5>
                        <p className="description">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

    return (
        <section id="education" className="education">
            <div className='title-container'>
                <h2 className="section__title">Education</h2>
                <span className="section__subtitle">My personal journey</span>
            </div>
            <div className="containerr">
                <div className="education-horizontal-timeline">
                    <div className="rowe">
                        <TimelineItem
                            yearRange="2017 - 2019"
                            degree="Advancd Level - Physics Stream"
                            university="Kegalu Balika Vidyalaya"
                            location="Kegalla, Sri Lanka"
                            description="Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident."
                        />
                        <TimelineItem
                            yearRange="2021 - 6 months"
                            degree="Diploma in IT (DiTech)"
                            university="Esoft Metro Campus"
                            location="Kegalla, Sri Lanka"
                            description="Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident."
                        />
                        <TimelineItem
                            yearRange="2021 - 2025"
                            degree="BSc (Hons) in Computer Science and Technology"
                            university="Uva Wellassa University of Sri Lanka"
                            location="Badulla, Sri Lanka"
                            description="Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
