import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Brands from "./pages/Brands/Brands";
import UsedMarket from "./pages/UsedMarket/UsedMarket";
import Community from "./pages/Community/Community";
import Support from "./pages/Support/Support";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Wishlist from "./pages/Wishlist/Wishlist";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Account from "./pages/Account/Account";
import About from "./pages/About/About";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import AdminOrders from "./pages/AdminOrders/AdminOrders";


function App() {

    return (

        <>
            <ScrollToTop />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/products"
                    element={<Products />}
                />

                <Route
                    path="/brands"
                    element={<Brands />}
                />

                <Route
                    path="/used-market"
                    element={<UsedMarket />}
                />

                <Route
                    path="/community"
                    element={<Community />}
                />

                <Route
                    path="/support"
                    element={<Support />}
                />

                <Route
                    path="/cart"
                    element={<Cart />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                <Route
                    path="/wishlist"
                    element={<Wishlist />}
                />

                <Route
                    path="/products/:id"
                    element={<ProductDetail />}
                />

                <Route
                    path="/account"
                    element={<Account />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/terms"
                    element={<Terms />}
                />

                <Route
                    path="/privacy"
                    element={<Privacy />}
                />

                <Route
                    path="/admin/orders"
                    element={<AdminOrders />}
                />

            </Routes>

        </>

    );

}


export default App;