
import React from 'react';
import MyCarousel from './MyCarousel';
import Familia from '../img/Familia.jpg';
import Rehabilitacion from '../img/Rehabilitacion.jpg';
import Decepcion from '../img/Decepcion.jpg';
import Comunidad from '../img/Comunidad.jpg';

const Home: React.FC = () => {
  // Función para determinar el estilo de margen superior en función del ancho de la ventana
  const getMarginTop = () => {
    const width = window.innerWidth;
    if (width < 768) { // Cambia 768 por el punto de quiebre que prefieras
      return '90%'; // Margen para pantallas más pequeñas
    }
    return '18%'; // Margen para pantallas más grandes
  };

  const slides: JSX.Element[] = [
    // Tus slides aquí, usando getMarginTop() para el estilo
    <div className="row" key="slide1" style={{
      backgroundImage: `url(${Decepcion})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '80vh',
      width: '105vw'
    }}>
      <div className="col-12 col-md-12 offset-md-0 text-center">
        <p style={{ marginTop: getMarginTop() }} className='h1'>
          Rehabilitación con amor familiar, forjamos juntos la esperanza.
        </p>
      </div>
    </div>,
    <div className="row" key="slide2" style={{
      backgroundImage: `url(${Familia})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '80vh', // Ocupa toda la altura de la ventana
      width: '105vw'  // Ocupa todo el ancho de la ventana
    }}>
      <div className="col-12 col-md-12 offset-md-0 text-center">
        <p style={{ marginTop: getMarginTop() }} className='h1'>En nuestra comunidad, la familia es la clave de la recuperación.</p>
      </div>

    </div>,
    <div className="row" key="slide3" style={{
      backgroundImage: `url(${Comunidad})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '80vh', // Ocupa toda la altura de la ventana
      width: '105vw'  // Ocupa todo el ancho de la ventana
    }}>
      <div className="col-12 col-md-12 offset-md-0 text-center">
        <p style={{ marginTop: getMarginTop() }} className='h1'>Construyendo caminos de esperanza con el apoyo de la familia.</p>
      </div>

    </div>
  ];

  return <MyCarousel items={slides} />;
};

export default Home;
