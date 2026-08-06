import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Brands from "./pages/Brands/Brands";
import UsedMarket from "./pages/UsedMarket/UsedMarket";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/used-market" element={<UsedMarket />} />
    </Routes>
  );
}

export default App;