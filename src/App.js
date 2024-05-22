import logo from './logo.svg';
import './App.css';
import MyComponentes from './componentes/MyComponentes';
import { SegundoComponente } from './componentes/SegundoComponente';
import { ThirdComponentes } from './componentes/ThirdComponentes';

function App() {

  const medicalRecord = {
    height: "1.60",
    bloodGroup: "RH A+",
    allergies: "NONE"
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <SegundoComponente />
        <ThirdComponentes
          name="leonardo"
          lastname="lasso"
          card={medicalRecord}
        />
        <MyComponentes />

      </header>
    </div>
  );
}

export default App;
