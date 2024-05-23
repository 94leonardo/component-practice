import React from 'react'

export const CuartoComponente = () => {

  const handleClicked = (e) => {
    alert("Has hecho click al botón!!");
  }

  return (
    <div>
        <h2>Eventos en React</h2>
        {/* Evento Click */}
        <div>
          <button onClick={ () => {
              console.log("Hola, soy un evento Click!!");
          } }>Haz Click!!</button>
        </div>
        <div>
          <button onClick={ handleClicked }>Aquí también haz Click!!</button>
        </div>


        {/* Evento Doble Click */}
        {/* Evento Mouse Enter y Mouse Leave */}
        {/* Evento Focus y Blur */}

    </div>
  )
}