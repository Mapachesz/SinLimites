import Navbar from "./components/Navbar";
import ExampleComp from "./components/ExampleComp";
import "./styles.css";
import Nosotros from "./components/Nostros";
import Profesionales from "./components/Profesionales";
import Home from "./components/Home";


function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div id="inicio" className="col-12 Inicio">
            <div className="main-container">
              <Home></Home>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="nosotros" className="col-12 Nosotros">
            <div className="main-container">
              <Nosotros></Nosotros>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="profesionales" className="col-12 Profesionales">
            <div className="main-container">
              <Profesionales></Profesionales>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="galeria" className="col-12 Galeria">
            <div className="main-container">
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
