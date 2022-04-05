import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';

function App() {

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar')
  }

  return (
    <div className="App">
      <div className='fcc-logo-contenedor'>
        <img
          className='fcc-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'  
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics='5' />
        <Boton
          texto='Clic'
          esBotonDeClic = {true}
          manejarClic={manejarClic}/>
         <Boton
          texto= 'Reiniciar'
          esBotonClic ={false}
          manejarClic = {reiniciarContador}
         /> 
      </div>
    </div>
  );
}

export default App;
