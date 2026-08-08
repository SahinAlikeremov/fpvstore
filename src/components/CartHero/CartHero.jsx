import "./CartHero.css";

import { FiShoppingBag } from "react-icons/fi";

function CartHero() {
    return (
        <section className="cart-hero">

            <div className="cart-hero-container">

                <div className="cart-hero-content">

                    <span className="cart-tag">
                        YOUR SHOPPING CART
                    </span>

                    <h1>
                        YOUR
                        <br />
                        <span>CART</span>
                    </h1>

                    <p>
                        Review the FPV products you've selected,
                        update quantities and get your order ready.
                    </p>

                </div>

                <div className="cart-hero-icon">

                    <FiShoppingBag />

                </div>

            </div>

        </section>
    );
}

export default CartHero;