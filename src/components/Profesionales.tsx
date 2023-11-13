import JessiferImage from "../img/Jessifer_Profesional.jpg";
import MariaImage from "../img/Maria_Profeisonal.jpg";
import "./Profesionales.css";

function Profesionales() {
  return (
    <div>
      <div className="row">
        <h1 className="h1 titulo">Profesionales</h1>
      </div>
      <div className="row">
        <div className="col-12 col-sm text-center">
          <img src={JessiferImage} width={"70%"} className="rounded-circle"></img>
        </div>
        <div className="col-sm">
          <h2 className="h2">Jessifer Cavieres</h2>
          <p className="p">
            Titulada y Licenciada en Psicología por la Universidad de Aconcagua,
            Chile. Psicóloga especialista en rehabilitación de drogas y alcohol,
            cuenta con estudios de especialización en el área de la
            drogadicción, conceptualización e intervención y curso en Familia y
            Adicción. Trabaja desde una perspectiva humanista y cognitiva
            conductual. Se especializa atenciones individuales y posee
            experiencia de 2 años en el área de adicciones en el ámbito privado.{" "}
          </p>
          <p>“Los miedos que no enfrentas, se transforman en tus límites”.</p>
        </div>
        <div className="col-12 col-sm text-center">
          <img src={MariaImage} width={"70%"} className="rounded-circle"></img>
        </div>
        <div className="col-sm">
          <h2 className="h2">Maria Turchan</h2>
          <p className="p">
            Profesional con más de tres años de experiencia en comunidades
            terapéuticas de rehabilitación, trabajando desde el modelo cognitivo
            - conductual con patologías duales. en el ámbito privado.{" "}
          </p>
          <p className="p">
            “Son las decisiones, y no las condiciones, las que determinan
            quienes somos en realidad." - Viktor Frankl.
          </p>
        </div>
      </div>
    </div >
  );
}

export default Profesionales;
