import handImg from "../../assets/hand.svg";
import sendImg from "../../assets/send.svg";

export const Data = () => {
    return (
        <div className="home_data">
            <h1 className="home_title">
                Matías Casteglione <img src={handImg} alt="Waving Hand" />
            </h1>

            <h3 className="home_subtitle">Software Developer</h3>
            <p className="home_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                officiis rerum perspiciatis. In vero vel iure quam omnis.
            </p>

            <a href="#contact" className="button button--flex">
                Say Hello <img src={sendImg} alt="Send Message" className="home_send_img"/>
            </a>
        </div>
    );
};
