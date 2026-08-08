import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Brands from "./pages/Brands/Brands";
import UsedMarket from "./pages/UsedMarket/UsedMarket";
import Community from "./pages/Community/Community";
import Support from "./pages/Support/Support";
import Cart from "./pages/Cart/Cart";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/used-market" element={<UsedMarket />} />
      <Route path="/community" element={<Community />} />
      <Route path="/support" element={<Support />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;