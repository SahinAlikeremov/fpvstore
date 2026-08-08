import "./Cart.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import CartHero from "../../components/CartHero/CartHero";
import CartItems from "../../components/CartItems/CartItems";
import CartSummary from "../../components/CartSummary/CartSummary";

function Cart() {
    return (
        <>
            <Navbar />

            <main className="cart-page">

                <CartHero />

                <CartItems />

                <CartSummary />

            </main>

            <Footer />
        </>
    );
}

export default Cart;