import MissionImage from '../img/mision.png'
import VisionImage from '../img/vision.png'
import GoalImage from '../img/objetivo.png'
import './Nosotros.css'

function Nosotros() {
    const h1Us = {
        color: '#3f51b5'

    };
    return (
        <>
            <div className="row">
                <div className="col-12 col-sm text-center mb-5">
                    <h1 style={h1Us} className="h1" >Sobre Nosotros</h1>
                </div>
            </div>

            <div className="row">

                <div className="col-12 col-sm text-center">
                    <img className='core' width={'30%'} src={MissionImage}></img>
                    <h1 style={h1Us} className="h1" >Mision</h1>
                    <p className='p'> El Centro de Rehabilitación Sin Límites, proporciona servicios de rehabilitación integral a
                        personas con consumo problemático de drogas, con el fin de fomentar el proceso de
                        rehabilitación a través de tratamiento y estrategias socio-terapéuticas con el fin de
                        restablecer la capacidad funcional del individuo en las áreas biológicas y sociales para
                        mejorar su calidad de vida, para así, incorporar o reincorporar a la vida social, laboral y
                        familiar.</p>
                </div>
                <div className="col-12 col-sm text-center">
                    <img className='core' width={'30%'} src={VisionImage}></img>
                    <h1 style={h1Us} className="h1">Vision</h1>
                    <p className='p'> El Centro clínico Sin Limites es una propuesta integral, que permite contribuir al bienestar
                        biopsicosocial de las personas con consumo problemático de drogas, mejorando el
                        bienestar individual, familiar y social, a través del cambio de hábitos y actitudes, con el fin
                        de que cada usuario adquiera una mayor consistencia y calidad de vida, entregando una
                        experiencia de calidad humana tanto para los residentes como para las familias.</p>
                </div>
                <div className="col-12 col-sm text-center">
                    <img className='core' width={'30%'} src={GoalImage}></img>
                    <h1 style={h1Us} className="h1">Objetivo</h1>
                    <p className='p'> Aportar y brindar un tratamiento integral a hombres mayores de 18 años, que tengan
                        problemas de consumo problemático de drogas y alcohol, desde un enfoque
                        biopsicosocial, restaurando no solo a la persona, si no que todo su entorno, con técnicas
                        profesionales y desde la vocación humana, asi también, mantener estado de abstinencia

                        terminado el proceso de tratamiento, desde un seguimiento y acompañamiento integral,
                        proporcionando las herramientas básicas sobre las adicciones, la prevención, atención,
                        recuperación y prevención de recaídas</p>

                </div>
            </div>
        </>
    )
}

export default Nosotros