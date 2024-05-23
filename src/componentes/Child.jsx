import React from "react";

export const Child = ({ name, setName, addMessage }) => {
  const sendMessage = () => {
    addMessage("Este es el mensaje del HIJO");
  };
  const changeName = () => {
    setName("Nuevo nombre hijo");
  };

  return (
    <div>
      {name}
      <div>
        <button onClick={sendMessage}>Enviar Mensaje</button>
        <button onClick={changeName}>cambiar nombre</button>
      </div>
    </div>
  );
};
