import "./ContactForm.css";

import { FiSend } from "react-icons/fi";

function ContactForm() {
    return (

        <section className="contact-form">

            <div className="contact-title">

                <span>CONTACT US</span>

                <h2>
                    Send Us A Message
                </h2>

                <p>
                    Have a question or need assistance?
                    Fill out the form below and we'll get
                    back to you as soon as possible.
                </p>

            </div>

            <form className="contact-container">

                <div className="input-group">

                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                </div>

                <input
                    type="text"
                    placeholder="Subject"
                />

                <textarea
                    rows="7"
                    placeholder="Write your message..."
                ></textarea>

                <button>

                    <FiSend />

                    Send Message

                </button>

            </form>

        </section>

    );
}

export default ContactForm;