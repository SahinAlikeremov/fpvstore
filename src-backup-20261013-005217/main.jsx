import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { CartProvider } from "./contexts/CartContext.jsx";
import { WishlistProvider } from "./contexts/WishlistContext.jsx";


const isGitHubPages =
    window.location.hostname.includes("github.io");


const basename = isGitHubPages
    ? "/fpvstore"
    : "/";


ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <BrowserRouter basename={basename}>

            <CartProvider>

                <WishlistProvider>

                    <App />

                </WishlistProvider>

            </CartProvider>

        </BrowserRouter>

    </React.StrictMode>

);