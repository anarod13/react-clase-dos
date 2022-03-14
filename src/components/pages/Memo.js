import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import FancyButton from "../small/FancyButton";
import "./Memotest.css";

const Square = ({ value, estado, onClick = () => {} }) => {
  return (
    <div onClick={onClick} id="square" className={estado}>
      {value}
    </div>
  );
};

const juegoDeCartas = [
  {
    id: "django",
    src: "img/django.jpg",
    estado: "oculta",
  },
  {
    id: "hateful-eight",
    src: "img/hateful-eight.jpg",
    estado: "oculta",
  },

  {
    id: "jackie-brown",
    src: "img/jackie-brown.jpg",
    estado: "oculta",
  },
  {
    id: "kill-bill",
    src: "img/kill-bill.jpg",
    estado: "oculta",
  },
  {
    id: "once-upon-a-time-hollywood",
    src: "img/once-upon-a-time-hollywood.jpg",
    estado: "oculta",
  },
  {
    id: "pulp-fiction",
    src: "img/pulp-fiction.jpg",
    estado: "oculta",
  },
  {
    id: "reservoir-dogs",
    src: "img/reservoir-dogs.jpg",
    estado: "oculta",
  },
  {
    id: "inglorious-basterds",
    src: "img/inglorious-basterds.jpg",
    estado: "oculta",
  },
  {
    id: "django",
    src: "img/django.jpg",
    estado: "oculta",
  },
  {
    id: "hateful-eight",
    src: "img/hateful-eight.jpg",
    estado: "oculta",
  },
  {
    id: "jackie-brown",
    src: "img/jackie-brown.jpg",
    estado: "oculta",
  },
  {
    id: "kill-bill",
    src: "img/kill-bill.jpg",
    estado: "oculta",
  },
  {
    id: "once-upon-a-time-hollywood",
    src: "img/once-upon-a-time-hollywood.jpg",
    estado: "oculta",
  },
  {
    id: "pulp-fiction",
    src: "img/pulp-fiction.jpg",
    estado: "oculta",
  },
  {
    id: "reservoir-dogs",
    src: "img/reservoir-dogs.jpg",
    estado: "oculta",
  },
  {
    id: "inglorious-basterds",
    src: "img/inglorious-basterds.jpg",
    estado: "oculta",
  },
];

const useMemotestGameState = () => {
  const [cartas, setCartas] = React.useState(juegoDeCartas);

  const seleccionarCarta = (indexCarta) => {
    if (cartas[indexCarta].estado === "oculta") {
      cartas[indexCarta].estado = "hola";
      setCartas(cartas);
    }
  };

  return { cartas, seleccionarCarta };
};

const Memo = () => {
  const { cartas, seleccionarCarta } = useMemotestGameState();
  const cartasPorFila = [];
  cartasPorFila[0] = cartas.slice(0, 4);
  cartasPorFila[1] = cartas.slice(4, 8);
  cartasPorFila[2] = cartas.slice(8, 12);
  cartasPorFila[3] = cartas.slice(12);
  console.log(cartas);
  return (
    <div className="memotest">
      {cartasPorFila.map((fila, indexFila) => (
        <div className="memotest-row" key={"row" + indexFila}>
          {fila.map((carta, indexCasilla) => (
            <Square
              value={carta.id}
              estado={'hola'}
              key={indexFila * 4 + indexCasilla}
              onClick={() => {
                seleccionarCarta(indexFila * 4 + indexCasilla);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Memo;
