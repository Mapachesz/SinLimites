import React, { useState, FormEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap CSS

const Contacto: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Implementar lógica para enviar un correo electrónico
    console.log(email, message);
    // Aquí podrías llamar a una API para enviar el correo
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Formulario de contacto para enviar un correo */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar Correo
            </button>
          </form>
        </div>

        {/* Botón de WhatsApp */}
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <a
              href="https://wa.me/1234567890" // Sustituye con tu número de teléfono
              className="btn btn-success mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir WhatsApp
            </a>
            <p>O contáctanos por WhatsApp para una respuesta inmediata.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
