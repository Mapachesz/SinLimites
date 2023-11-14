import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap CSS
import { Modal } from "react-bootstrap";

// Importa tus imágenes
import galeria1 from "../img/galeria1.jpg";
import galeria2 from "../img/galeria2.jpg";
import galeria3 from "../img/galeria3.jpg";
import galeria4 from "../img/galeria4.jpg";
import galeria5 from "../img/galeria5.jpg";
import galeria6 from "../img/galeria6.jpg";

const Galeria = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Guarda el índice de la imagen activa

  const images = [
    { src: galeria1, alt: "galeria1" },
    { src: galeria2, alt: "galeria2" },
    { src: galeria3, alt: "galeria3" },
    { src: galeria4, alt: "galeria4" },
    { src: galeria5, alt: "galeria5" },
    { src: galeria6, alt: "galeria6" },
    // ...más imágenes
  ];

  const handleClick = (index: React.SetStateAction<number>) => {
    setActiveIndex(index); // Actualiza el índice activo
    setShowModal(true);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="container">
      <div className="row g-3">
        {images.map((image, index) => (
          <div className="col-sm-6 col-md-4" key={index}>
            <div className="card" onClick={() => handleClick(index)}>
              <img src={image.src} className="card-img-top" alt={image.alt} />
            </div>
          </div>
        ))}
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
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
        <Modal.Footer className="justify-content-between">
          <button className="btn btn-outline-secondary" onClick={handlePrev}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-outline-secondary" onClick={handleNext}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Galeria;
