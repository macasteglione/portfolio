import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Matías</h1>
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#" className="footer_link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="#" className="footer_social_link" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>

                    <a href="#" className="footer_social_link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="#" className="footer_social_link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer_copy">
                    &#169; macasteglione. All rights reserved
                </span>
            </div>
        </footer>
    );
};
