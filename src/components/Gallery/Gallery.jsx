import "./Gallery.css";

import image1 from "../../assets/images/gallery1.jpg";
import image2 from "../../assets/images/gallery2.png";
import image3 from "../../assets/images/gallery3.png";
import image4 from "../../assets/images/gallery4.png";
import image5 from "../../assets/images/gallery5.png";


function Gallery() {
    return (

        <section className="gallery">

            <div className="gallery-title">

                <span>COMMUNITY GALLERY</span>

                <h2>
                    Moments From Our FPV Community
                </h2>

                <p>
                    Explore some amazing drone builds, freestyle
                    flights and unforgettable moments shared by
                    FPV pilots.
                </p>

            </div>

            <div className="gallery-grid">

                <div className="gallery-item">

                    <img
                        src={image1}
                        alt="Gallery"
                    />

                </div>

                <div className="gallery-item">

                    <img
                        src={image2}
                        alt="Gallery"
                    />

                </div>

                <div className="gallery-item">

                    <img
                        src={image3}
                        alt="Gallery"
                    />

                </div>

                <div className="gallery-item">

                    <img
                        src={image4}
                        alt="Gallery"
                    />

                </div>

                <div className="gallery-item">

                    <img
                        src={image5}
                        alt="Gallery"
                    />

                </div>

            </div>

        </section>

    );
}

export default Gallery;