import scrollImg from "../../assets/scroll.svg";

export const ScrollDown = () => {
    return (
        <div className="home_scroll">
            <a href="#about" className="home_scroll_button button--flex">
                <img src={scrollImg} alt="Scroll" />
                <span className="home_scroll_name">Scroll Down</span>
                <i className="uil uil-arrow-down home_scroll_arrow"></i>
            </a>
        </div>
    );
};
