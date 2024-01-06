import React, { useEffect } from 'react';
import "./Styles.css";




function Navbar() {
  useEffect(() => {
    // Define la función handleScroll dentro de useEffect para que se cree
    // cada vez que el componente se monta y se asegura que tenga la referencia más reciente del navbar.
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar'); // Selecciona tu navbar
      if (navbar) { // Comprobación para asegurarse de que navbar no es null
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-colored');
        } else {
          navbar.classList.remove('navbar-colored');
        }
      }
    };

    // Añade el event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Los corchetes vacíos aseguran que este efecto solo se ejecute una vez.

  return (
    <nav className=" navbar navbar-expand-sm navbar-dark fixed-top ps-5 navbar-scrolled mi-navbar text-light">
      <a className="navbar-brand" href="#">
        Sin limites
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarText ">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-5 ">
            <a className="nav-link" href="#inicio">
              Inicio
            </a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#nosotros">
              Nosotros
            </a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#profesionales">
              Profesionales
            </a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#galeria">
              Instalaciones
            </a>
          </li>
          <li className="nav-item me-5">
            <a className="nav-link" href="#comollegar">
              Como llegar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
