import logo from './logo.svg';
import './App.css';
import Prueba from './components/Prueba';

function App() {
  return (
    <div className="App">
      {/* Muestra el compontente Prueba y le asigna los valores por probs para a que sea 10 y b 20 */}
      <Prueba a={50} b={20}></Prueba>
    </div>
  );
}

export default App;
