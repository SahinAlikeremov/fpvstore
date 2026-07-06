import "./Products.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Products() {
  return (
    <>
      <Navbar />

      <main className="products">

        <div className="products-container">

          <div className="products-header">

            <span>SHOP</span>

            <h1>PRODUCTS</h1>

            <p>
              Discover the best FPV drones, batteries, radios,
              goggles and accessories in Azerbaijan.
            </p>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Products;