import { useState } from "react";
import "./Services.css";

export const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What I Offer</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">
                            Product <br /> Designer
                        </h3>
                    </div>
                    <span
                        className="services_button"
                        onClick={() => {
                            toggleTab(1);
                        }}
                    >
                        View More
                        <i className="uil uil-arrow-right services_button_icon"></i>
                    </span>

                    <div
                        className={
                            toggleState === 1
                                ? "services_modal active_modal"
                                : "services_modal"
                        }
                    >
                        <div className="services_modal_content">
                            <i
                                onClick={() => toggleTab(0)}
                                className="uil uil-times services_modal_close"
                            ></i>
                            <h3 className="services_modal_title">
                                Product Designer
                            </h3>
                            <p className="services_modal_description">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deleniti, quo. Mollitia fugiat
                                tenetur ducimus vel tempora molestiae.
                            </p>
                            <ul className="services_modal_services grid">
                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I create ux element interactions.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        Design and mockups of products for
                                        companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">
                            UI/UX <br /> Designer
                        </h3>
                    </div>
                    <span
                        className="services_button"
                        onClick={() => {
                            toggleTab(2);
                        }}
                    >
                        View More
                        <i className="uil uil-arrow-right services_button_icon"></i>
                    </span>

                    <div
                        className={
                            toggleState === 2
                                ? "services_modal active_modal"
                                : "services_modal"
                        }
                    >
                        <div
                            className="services_modal_content"
                            onClick={() => toggleTab(0)}
                        >
                            <i className="uil uil-times services_modal_close"></i>
                            <h3 className="services_modal_title">
                                UI/UX Designer
                            </h3>
                            <p className="services_modal_description">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deleniti, quo. Mollitia fugiat
                                tenetur ducimus vel tempora molestiae.
                            </p>
                            <ul className="services_modal_services grid">
                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I create ux element interactions.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        Design and mockups of products for
                                        companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">
                            Visual <br /> Designer
                        </h3>
                    </div>
                    <span
                        className="services_button"
                        onClick={() => {
                            toggleTab(3);
                        }}
                    >
                        View More
                        <i className="uil uil-arrow-right services_button_icon"></i>
                    </span>

                    <div
                        className={
                            toggleState === 3
                                ? "services_modal active_modal"
                                : "services_modal"
                        }
                    >
                        <div
                            className="services_modal_content"
                            onClick={() => toggleTab(0)}
                        >
                            <i className="uil uil-times services_modal_close"></i>
                            <h3 className="services_modal_title">
                                Visual Designer
                            </h3>
                            <p className="services_modal_description">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deleniti, quo. Mollitia fugiat
                                tenetur ducimus vel tempora molestiae.
                            </p>
                            <ul className="services_modal_services grid">
                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I create ux element interactions.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        Design and mockups of products for
                                        companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
