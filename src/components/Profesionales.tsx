import JessiferImage from "../img/Jessifer_Profesional.jpg";
import MariaImage from "../img/Maria_Profeisonal.jpg";
import RicardoImage from "../img/Ricardo_Profesional.jpg"
import { CSSProperties } from "react";

function Profesionales() {
  const h1Us = {
    color: "#5C6BC0",
  };
  const pPr: CSSProperties = {
    color: "#546E7A",
    textAlign: "justify",
  };

  return (
    <div>
      <div className="row">
        <h1
          style={h1Us}
          className="h1 col-12 text-center col-sm mx-auto mt-5 mb-5 "
        >
          PROFESIONALES
        </h1>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 ml-sm-1">
          <div className="text-center">
            <img
              src={JessiferImage}
              width={"45%"}
              className="rounded-circle mt-3 mb-3 "
            ></img>
          </div>
          <h2 style={h1Us} className="h2 mb-3 mb-sm-3 mt-4 mt-sm-0 text-center">
            JESSIFER CAVIERES
          </h2>
          <p style={pPr} className="p ">
            Titulada y Licenciada en Psicología por la Universidad de Aconcagua,
            Chile. Psicóloga especialista en rehabilitación de drogas y alcohol,
            cuenta con estudios de especialización en el área de la
            drogadicción, conceptualización e intervención y curso en Familia y
            Adicción. Trabaja desde una perspectiva humanista y cognitiva
            conductual. Se especializa atenciones individuales y posee
            experiencia de 2 años en el área de adicciones en el ámbito privado.{" "}
          </p>
          <p style={pPr} className="p">
            “Los miedos que no enfrentas, se transforman en tus límites”.
          </p>
        </div>
        <div className="col-12 col-sm-6">
          <div className="text-center">
            <img
              src={RicardoImage}
              width={"45%"}
              className="rounded-circle mt-3 mb-3"
            ></img>
          </div>
          <h2 style={h1Us} className="h2 mb-3 mb-sm-3 mt-4 mt-sm-0 text-center">
            RICARDO BALLESTEROS
          </h2>
          <p style={pPr} className="p">
            Entrenador profesional de deportes y actividad física
            - Terapias deportivas{" "}
          </p>
          <p style={pPr} className="p">
            “Algunas personas quieren que algo ocurra, otras sueñan con que pasará, y otras que hacen que suceda.” - Michael Jordan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profesionales;
