import "./Skills.css";
import { Frontend } from "./Frontend";
import { Backend } from "./Backend";

export const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My Technical Level</span>

            <div className="skills_container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    );
};
