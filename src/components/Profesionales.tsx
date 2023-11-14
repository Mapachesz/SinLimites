import JessiferImage from "../img/Jessifer_Profesional.jpg";
import MariaImage from "../img/Maria_Profeisonal.jpg";
import { CSSProperties } from 'react';

function Profesionales() {
  const h1Us = {
    color: '#5C6BC0'

  };
  const pPr: CSSProperties = {
    color: '#546E7A',
    textAlign: 'justify'
  }

  return (
    <div>
      <div className="row">
        <h1 style={h1Us} className="h1 col-12 text-center col-sm mx-auto mt-5 mb-5 ">PROFESIONALES</h1>
      </div>
      <div className="row">
        <div className="col-12 col-sm-3 text-center ">
          <img src={JessiferImage} width={"70%"} className="rounded-circle mt-3 mb-3"></img>
        </div>
        <div className="col-12 col-sm-3 ">
          <h2 style={h1Us} className="h2 mb-3 mb-sm-3 mt-4 mt-sm-0 text-center">JESSIFER CAVIERES</h2>
          <p style={pPr} className="p ">
            Titulada y Licenciada en Psicología por la Universidad de Aconcagua,
            Chile. Psicóloga especialista en rehabilitación de drogas y alcohol,
            cuenta con estudios de especialización en el área de la
            drogadicción, conceptualización e intervención y curso en Familia y
            Adicción. Trabaja desde una perspectiva humanista y cognitiva
            conductual. Se especializa atenciones individuales y posee
            experiencia de 2 años en el área de adicciones en el ámbito privado.{" "}
          </p>
          <p style={pPr} className="p">“Los miedos que no enfrentas, se transforman en tus límites”.</p>
        </div>
        <div className="col-12 col-sm-3 text-center">
          <img src={MariaImage} width={"70%"} className="rounded-circle mt-3 mb-3"></img>
        </div>
        <div className="col-12 col-sm-3">
          <h2 style={h1Us} className="h2 mb-3 mb-sm-3 mt-4 mt-sm-0 text-center">MARIA TURCHAN</h2>
          <p style={pPr} className="p">
            Profesional con más de tres años de experiencia en comunidades
            terapéuticas de rehabilitación, trabajando desde el modelo cognitivo
            - conductual con patologías duales. en el ámbito privado.{" "}
          </p>
          <p style={pPr} className="p">
            “Son las decisiones, y no las condiciones, las que determinan
            quienes somos en realidad." - Viktor Frankl.
          </p>
        </div>
      </div>
    </div >
  );
}

export default Profesionales;
