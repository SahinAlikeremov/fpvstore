import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import mpu6000 from "../../assets/images/mpu6000.png";
import drone from "../../assets/images/heroDrone.png";
import f60 from "../../assets/images/f60.png";
import ovonic from "../../assets/images/ovonic1550.png";
import ovonic2 from "../../assets/images/ovonic1300.png";
import gemfan from "../../assets/images/gemfanprops.png";
import tattu from "../../assets/images/tattu1480.png";
import hdzero from "../../assets/images/hdzero.png";
import boxer from "../../assets/images/boxer.png";

function ProductGrid() {
  return (
    <section className="product-grid">

      <div className="grid">

        <ProductCard
          image={mpu6000}
          badge="Pre-Order"
          brand="T-Hobby"
          title="T-HOBBY MINI F7 (MPU6000)"
          price={289}
          oldPrice={349}
          reviews={27}
        />

        <ProductCard
          image={f60}
          badge="-10%"
          brand="T-Hobby"
          title="F60 Pro V 1950KV"
          price={80}
          oldPrice={120}
          reviews={52}
        />

        <ProductCard
          image={ovonic}
          badge="Used"
          brand="Ovonic"
          title="6S 1550mAh 100C"
          price={69}
          oldPrice={89}
          reviews={85}
        />

        <ProductCard
          image={ovonic}
          badge="Used-Like New"
          brand="Ovonic"
          title="6S 1550mAh 100C"
          price={69}
          oldPrice={79}
          reviews={14}
        />

        <ProductCard
          image={gemfan}
          badge="-15%"
          brand="Gemfan"
          title="51466 Hurricane(1 pack)"
          price={12}
          oldPrice={15}
          reviews={74}
        />

        <ProductCard
          image={tattu}
          badge="Pre-Order"
          brand="Tattu"
          title="6S 1480mAh 160C"
          price={149}
          oldPrice={174}
          reviews={33}
        />

        <ProductCard
          image={hdzero}
          badge="NEW"
          brand="HDZero"
          title="Goggles 2"
          price={2000}
          reviews={17}
        />

        <ProductCard
          image={boxer}
          badge="HOT"
          brand="Radiomaster"
          title="Boxer ELRS"
          price={319}
          oldPrice={389}
          reviews={48}
        />

      </div>

    </section>
  );
}

export default ProductGrid; 