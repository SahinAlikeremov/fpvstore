import "./FAQ.css";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

function FAQ() {

    const [active, setActive] = useState(0);

    const faq = [

        {
            question: "How long does shipping take?",
            answer:
                "Orders are usually processed within 24 hours and delivered in 1–5 business days depending on your location."
        },

        {
            question: "Are all products original?",
            answer:
                "Yes. Every product sold on FPVStore.az is 100% genuine and sourced from trusted manufacturers."
        },

        {
            question: "Can I return a product?",
            answer:
                "Yes. If the product is unused and meets our return policy, you can request a return within the specified period."
        },

        {
            question: "Do you provide technical support?",
            answer:
                "Absolutely! Our team is always happy to help you choose products or solve FPV-related technical issues."
        },

        {
            question: "Can I track my order?",
            answer:
                "Yes. Once your order has been shipped, you'll receive tracking information via email."
        }

    ];

    return (

        <section className="faq">

            <div className="faq-title">

                <span>FAQ</span>

                <h2>
                    Frequently Asked Questions
                </h2>

                <p>
                    Find quick answers to the questions we receive
                    most often from our customers.
                </p>

            </div>

            <div className="faq-container">

                {

                    faq.map((item, index) => (

                        <div
                            className={
                                active === index
                                    ? "faq-item active"
                                    : "faq-item"
                            }
                            key={index}
                        >

                            <button
                                className="faq-question"
                                onClick={() =>
                                    setActive(
                                        active === index
                                            ? -1
                                            : index
                                    )
                                }
                            >

                                <span>
                                    {item.question}
                                </span>

                                {

                                    active === index
                                        ? <FiMinus />
                                        : <FiPlus />

                                }

                            </button>

                            <div className="faq-answer">

                                <p>
                                    {item.answer}
                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default FAQ;