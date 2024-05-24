import React from "react";

export const CuartoComponente = () => {
  const handleClicked = (e) => {
    alert("Has hecho click al botón!!");
  };
  const handleDoubleClick = (e) => {
    alert("has echo doble click");
  };
  //funciones para las dos funciones  el mouse
  const handleMouseEnter = (e) => {
    console.log("has entrado a la box con el mouse");
  };
  const handleMouseleave = (e) => {
    console.log("has salido d la box con el mouse");
  };
  //onMouseEnter y onMouseleave alert
  const handleMous = (e, action) => {
    alert(`has ${action} la box `);
  };
  //console log
  const handleMous1 = (e, action) => {
    console.log(`has ${action} la box `);
  };

  const insideInput = (e) => {
    console.log("estas dento del input");
  };
  const outsideInput = (e) => {
    console.log("estas fuera del input");
  };

  return (
    <div>
      <h2>Eventos en React</h2>
      {/* Evento Click */}
      <div>
        <button
          onClick={() => {
            console.log("Hola, soy un evento Click!!");
          }}
        >
          Haz Click!!
        </button>
      </div>
      <div>
        <button onClick={handleClicked}>Aquí también haz Click!!</button>
      </div>

      {/* Evento Doble Click */}
      <div>
        <button onDoubleClick={handleDoubleClick}>has doble Click</button>
      </div>

      {/* Evento Mouse Enter y Mouse Leave */}
      <div id="box">
        <div
          id="box1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseleave}
        >
          <p>¡pasa el mous por ensima!</p>
        </div>
        <div
          id="box2"
          onMouseEnter={(e) => handleMous(e, "entra a")}
          onMouseLeave={(e) => handleMous(e, "salida de ")}
        >
          <p>¡pasa el mous por ensima!</p>
        </div>
        <div
          id="box3"
          onMouseEnter={(e) => handleMous1(e, "entra a")}
          onMouseLeave={(e) => handleMous1(e, "salida de ")}
        >
          <p>¡pasa el mous por ensima!</p>
        </div>
      </div>

      {/* Evento Focus y Blur se utiliza en el input */}
      <div className="mt-5">
        <input
          type="text"
          placeholder="Escribe un nombre"
          onBlur={outsideInput}
          onFocus={insideInput}
        />
      </div>
    </div>
  );
};
