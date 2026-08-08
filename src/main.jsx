import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./contexts/CartContext.jsx";

const basename = import.meta.env.DEV ? "/" : "/fpvstore";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter basename={basename}>
        <CartProvider>
            <App />
        </CartProvider>
    </BrowserRouter>
);