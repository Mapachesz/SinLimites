import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de importar Bootstrap CSS
import "./Footer.css";
import Logo from "../img/logo.png";

function Footer() {
  return (
    <div className="footer-wrapper">
      {" "}
      {/* Nuevo div que envuelve todo el contenido del footer */}
      <footer className="footer">
        <div className="container-fluid text-center">
          <div className="footer-content">
            {" "}
            {/* Nuevo div para el contenido del footer */}
            <div className="row">
              <div className="col-md-2"></div>

              <div className="col-md-8">
                <p className="h5">"Luchando por una vida sin drogas"</p>
              </div>

              <div className="col-md-2"></div>
            </div>
            <div className="footer-copy">
              &copy; {new Date().getFullYear()} Sin Límites. Todos los derechos
              reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
