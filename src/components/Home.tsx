import React from 'react';
import MyCarousel from './MyCarousel';
import './Home.css'; // Asegúrate de que este archivo CSS exista y tenga estilos adecuados
import SuperacionPersonal from '../img/superacion-personal.png'
import Logo from '../img/logo_transparent.png'


const Home: React.FC = () => {

  const centerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center', // Centra verticalmente
  };

  const slides: JSX.Element[] = [
    <div className="row" key="slide1">
      <div style={centerStyles} className="col-12 offset-0 col-md-4 offset-md-1 ">
        <img src={SuperacionPersonal} width={'50%'} className="d-block" />
      </div>
      <div className="col-12 col-md-4 offset-md-0 mt-5 text-center">
        <p className='h1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>,
    <div className="row " key="slide2">
      <div className="col-12 offset-0 col-md-4 offset-md-2 mt-5 text-center">
        <p className='h1'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div style={centerStyles} className="col-12 offset-0 col-md-4 offset-md-1 mt-5">
        <img src={SuperacionPersonal} width={'50%'} className="d-block" />
      </div>
    </div>,
    <div className="row" key="slide3">
      <div className="col-12 offset-0 col-md-4 offset-md-2 mt-5 text-center">
        <p className='h1'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      </div>
      <div style={centerStyles} className="col-12 offset-0 col-md-4 offset-md-1 mt-5">
        <img src={SuperacionPersonal} width={'50%'} className="d-block" />
      </div>
    </div>,
  ];

  return <MyCarousel items={slides} />;
};

export default Home;
