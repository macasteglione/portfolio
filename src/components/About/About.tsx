import "./About.css";
import aboutImg from "../../assets/about.jpg";
import CV from "../../assets/John-Cv.pdf";
import { Info } from "./Info";
import fileImg from "../../assets/files.svg";

export const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>

            <div className="about_container container grid">
                <img src={aboutImg} alt="About" className="about_img" />
                <div className="about_data">
                    <Info />

                    <p className="about_description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Accusantium est libero inventore natus amet
                        placeat, rerum quam, iusto eaque.
                    </p>

                    <a download="" href={CV} className="button button--flex">
                        Download CV <img src={fileImg} alt="Download" className="about_cv"/>
                    </a>
                </div>
            </div>
        </section>
    );
};
