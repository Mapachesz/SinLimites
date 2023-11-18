import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de importar Bootstrap CSS
import "./Footer.css";
import Logo from "../img/logo.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid text-center">
        <hr />

        <div className="row">
          <div className="col-md-4">
            <p className="h5">Contacto</p>
            <p className="h5">
              Correo:{" "}
              <a href="mailto:info@sinlimites.com">info@sinlimites.com</a>
            </p>
            <p className="h5">
              Dirección: Calle Ficticia #123, Ciudad Imaginaria
            </p>
          </div>

          <div className="col-md-4">
            <p className="h5">"Luchando por una vida sin drogas"</p>
          </div>

          <div className="col-md-4">
            <img
              src={Logo} // Reemplaza con la ruta correcta de tu imagen
              alt="Logo de Sin Límites"
              style={{ maxWidth: "20%", height: "auto" }}
            />
          </div>
        </div>

        <hr />

        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Sin Límites. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
