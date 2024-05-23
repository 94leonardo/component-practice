import React from "react";
import PropTypes from "prop-types";

export const ThirdComponentes = ({ name, lastname, card }) => {
  return (
    <div>
      <h2>Comunicacion entre componentes</h2>
      <ul>
        <li>{name}</li>
        <li>{lastname}</li>
        <li>{card.height}</li>
      </ul>
    </div>
  );
};

ThirdComponentes.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  card: PropTypes.object,
};
