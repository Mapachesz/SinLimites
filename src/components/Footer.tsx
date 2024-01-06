import React from "react";
import instagram from "../img/logoinstagram.png";
import facebook from "../img/facebook.png";
import logopng from "../img/logopng.png";

const Footer: React.FC = () => {
  return (
    <div className="app-footer w-100 footer-builder mt-4">
      <footer
        id="footer"
        style={{
          backgroundImage: "inherit",
          backgroundColor: "#e8eaf6",
        }}
      >
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0 footer-contact">
                <h3 className="mb-2">Comunidad Sin Límites</h3>
                <div>
                  <p>
                    Parcela Las Vegas Lote B, del Lote 1
                    <br />
                    Hijuela San Manuel Comuna Melipilla, Región Metropolitana.
                  </p>
                  <p>
                    <i className="me-2 appyslim-phone-call-talk"></i>
                  </p>
                  <p>
                    <i className="me-2 appyslim-ui-mail-message"></i>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0  footer-links">
                <h4 className="mb-2">Contáctanos</h4>
                <span>+56974238231</span>
                <span> fundacionsinlimites2022@gmail.com</span>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4 className="mb-2">Síguenos</h4>
                <div>Participa en la comunidad a través de redes sociales</div>
                <div className="social my-3" id="social">
                  <div className="social pt-2 pt-md-0 " id="social">
                    <a
                      href="https://www.facebook.com/cdrsinlimites/?locale=es"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={facebook}
                        alt="Facebook Logo"
                        style={{
                          width: "30px",
                          height: "30px",
                          marginRight: "10px",
                        }}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/comunidad_sin_limites/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={instagram}
                        alt="Instagram Logo"
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-center border-top pt-4 pb-0 mt-2"
              style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <img
                src={logopng}
                alt="Logo"
                style={{
                  width: "50px",
                  marginBottom: "10px",
                }}
              />
              All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
