import "./ContactForm.css";

import { useState } from "react";
import { FiSend } from "react-icons/fi";

function ContactForm() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");


    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm((current) => ({
            ...current,
            [name]: value
        }));

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        setSuccess("");
        setError("");


        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.subject.trim() ||
            !form.message.trim()
        ) {

            setError("Please fill in all fields.");

            return;
        }


        try {

            setLoading(true);


            const response = await fetch(
                "http://localhost:8080/api/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(form)
                }
            );


            const data = await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Message could not be sent."
                );

            }


            setSuccess(
                "Your message has been sent successfully!"
            );


            setForm({
                name: "",
                email: "",
                subject: "",
                message: ""
            });


            setTimeout(() => {

                setSuccess("");

            }, 4000);


        } catch (error) {

            console.error(
                "Contact form error:",
                error
            );

            setError(
                error.message ||
                "Something went wrong."
            );

        } finally {

            setLoading(false);

        }

    };


    return (

        <section className="contact-form">

            <div className="contact-title">

                <span>
                    CONTACT US
                </span>

                <h2>
                    Send Us A Message
                </h2>

                <p>
                    Have a question or need assistance?
                    Fill out the form below and we'll get
                    back to you as soon as possible.
                </p>

            </div>


            <form
                className="contact-container"
                onSubmit={handleSubmit}
            >

                <div className="input-group">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                    />


                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                    />

                </div>


                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                />


                <textarea
                    rows="7"
                    name="message"
                    placeholder="Write your message..."
                    value={form.message}
                    onChange={handleChange}
                ></textarea>


                {error && (

                    <p className="contact-error">
                        {error}
                    </p>

                )}


                {success && (

                    <p className="contact-success">
                        {success}
                    </p>

                )}


                <button
                    type="submit"
                    disabled={loading}
                >

                    <FiSend />

                    {loading
                        ? "Sending..."
                        : "Send Message"
                    }

                </button>

            </form>

        </section>

    );

}

export default ContactForm;