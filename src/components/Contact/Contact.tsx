import "./Contact.css";
import sendImg from "../../assets/send.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_KEY,
            import.meta.env.VITE_EMAILJS_TEMPLATE_SERVICE,
            form.current!,
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
        );

        e.currentTarget.reset();
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Get In Touch</h2>
            <span className="section_subtitle">Contact Me</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Talk To Me</h3>
                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx-mail-send contact_card_icon"></i>
                            <h3 className="contact_card_title">Email</h3>
                            <span className="contact_card_data">
                                matiascasteglione2002@gmail.com
                            </span>
                            <a
                                href="mailto:matiascasteglione2002@gmail.com"
                                className="contact_button"
                            >
                                Write Me{" "}
                                <i className="bx bx-right-arrow-alt contact_button_icon"></i>
                            </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-whatsapp contact_card_icon"></i>
                            <h3 className="contact_card_title">WhatsApp</h3>
                            <span className="contact_card_data">
                                999-888-777
                            </span>
                            <a href="#" className="contact_button">
                                Write Me{" "}
                                <i className="bx bx-right-arrow-alt contact_button_icon"></i>
                            </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-messenger contact_card_icon"></i>
                            <h3 className="contact_card_title">Messenger</h3>
                            <span className="contact_card_data">fb.user</span>
                            <a href="" className="contact_button">
                                Write Me{" "}
                                <i className="bx bx-right-arrow-alt contact_button_icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <h3 className="contact_title">Write Me Your Project</h3>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="contact_form"
                    >
                        <div className="contact_form_div">
                            <label className="contact_form_tag">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contact_form_input"
                                placeholder="Insert Your Name"
                            />
                        </div>

                        <div className="contact_form_div">
                            <label className="contact_form_tag">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="contact_form_input"
                                placeholder="Insert Your Email Address"
                            />
                        </div>

                        <div className="contact_form_div contact_form_area">
                            <label className="contact_form_tag">Project</label>
                            <textarea
                                name="project"
                                cols={30}
                                rows={10}
                                className="contact_form_input"
                                placeholder="Write Your Project"
                            ></textarea>
                        </div>
                        <button className="button button--flex">
                            Send Message{" "}
                            <img
                                src={sendImg}
                                alt="Send Message"
                                className="home_send_img"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
