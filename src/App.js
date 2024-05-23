import logo from "./logo.svg";
import "./App.css";
import MyComponentes from "./componentes/MyComponentes";
import { SegundoComponente } from "./componentes/SegundoComponente";
import { ThirdComponentes } from "./componentes/ThirdComponentes";
import { useState } from "react";
import { Child } from "./componentes/Child";
import { CuartoComponente } from "./componentes/CuartoComponete";

function App() {
  const [name, setName] = useState("LEONARDO");
  const [message, setMessage] = useState(" ");
  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  };

  const medicalRecord = {
    height: "1.60",
    bloodGroup: "RH A+",
    allergies: "NONE",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Estructura inicial del proyecto y limpia.</p>

        <CuartoComponente />

        <h2>Mensaje del hijo</h2>
        <p>{message}</p>
        <Child name={name} setName={setName} addMessage={addMessage} />
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
