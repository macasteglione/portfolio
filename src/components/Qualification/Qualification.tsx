import { useState } from "react";
import "./Qualification.css";

export const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My Personal Journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification_button qualification_active button--flex"
                                : "qualification_button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification_active qualification_icon"></i>
                        Education
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification_button qualification_active button--flex"
                                : "qualification_button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification_sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification_content qualification_content_active"
                                : "qualification_content"
                        }
                    >
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Web Design
                                </h3>
                                <span className="qualification_subtitle">
                                    Spain - Intitute
                                </span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">
                                    Art Director
                                </h3>
                                <span className="qualification_subtitle">
                                    Spain - Intitute
                                </span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    2020 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Web Development
                                </h3>
                                <span className="qualification_subtitle">
                                    Spain - Intitute
                                </span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    2018 - 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">
                                    UX Expert
                                </h3>
                                <span className="qualification_subtitle">
                                    Spain - Intitute
                                </span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    2017 - 2018
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification_content qualification_content_active"
                                : "qualification_content"
                        }
                    >
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Product Designer
                                </h3>
                                <span className="qualification_subtitle">
                                    Microsoft - Spain
                                </span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">
                                    UX Designer
                                </h3>
                                <span className="qualification_subtitle">
                                    Apple Inc - Intitute
                                </span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    2020 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Web Designer
                                </h3>
                                <span className="qualification_subtitle">
                                    Figma - Spain
                                </span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    2018 - 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
