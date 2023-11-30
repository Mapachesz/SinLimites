// Galeria.jsx
import React, { useState } from "react";
import { Carousel, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap CSS

// Importa tus imágenes
import galeria1 from "../img/interior1.jpg";
import galeria2 from "../img/interior2.jpg";
import galeria3 from "../img/interior3.jpg";
import galeria4 from "../img/interior4.jpg";
import galeria5 from "../img/interior5.jpg";
import galeria6 from "../img/interior6.jpg";

function Galeria() {
  const h1Us = {
    color: "#5C6BC0",
  };

  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: galeria1, alt: "galeria1" },
    { src: galeria2, alt: "galeria2" },
    { src: galeria3, alt: "galeria3" },
    { src: galeria4, alt: "galeria4" },
    { src: galeria5, alt: "galeria5" },
    { src: galeria6, alt: "galeria6" },
  ];

  const handleModal = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 text-center mt-5 mb-5">
          <h1 style={h1Us} className="h1">
            INSTALACIONES
          </h1>
        </div>
      </div>
      <div className="container mb-5">
        <Carousel>
          {[0, 1].map((slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <div className="row g-3">
                {[0, 1, 2].map((cardIndex) => (
                  <div className="col-sm-6 col-md-4" key={cardIndex}>
                    <div
                      className="card"
                      onClick={() => handleModal(slideIndex * 3 + cardIndex)}
                    >
                      <img
                        src={images[slideIndex * 3 + cardIndex].src}
                        className="card-img-top"
                        alt={images[slideIndex * 3 + cardIndex].alt}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="xl"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{images[activeIndex].alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img
              src={images[activeIndex].src}
              className="img-fluid"
              alt={images[activeIndex].alt}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Galeria;
