import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import FancyButton from "../small/FancyButton";
import "./Memotest.css";

// const Square = ({ value,alt, src,estado, onClick= ()=>{} }) => {

//   return (
//     <div className="tile">
//       <img
//         onClick={onClick}
//         className={estado}
//         id={value}
//         src={src}
//         alt={alt}
//       ></img>
//     </div>
//   );
// };
// Square.propTypes = {
//   src: PropTypes.string,
//   estado:PropTypes.string,
//   value: PropTypes.number,
//   onClick: PropTypes.func,
// };

// const WinnerCard = ({ show, winner, onRestart = () => {} }) => {
//   return (
//     <div className={cx("winner-card", { "winner-card--hidden": !show })}>
//       <span className="winner-card-text">
//         {winner ? `Player ${winner} has won the game!` : "It's a tie!"}
//       </span>
//       <FancyButton onClick={onRestart}>Play again?</FancyButton>
//     </div>
//   );
// };

// WinnerCard.propTypes = {
//   show: PropTypes.bool.isRequired,
//   winner: PropTypes.oneOf(["X", "O"]),
//   onRestart: PropTypes.func,
// };

// // const chequearPareja=(cartas)=>{
// //   if(cartas[0].src===cartas[1].src){
// //     cartas.forEach(carta => {carta.estado='acertada'
// //         });
// //     return 1
// //   } else {
// //     cartas.forEach(carta => {carta.estado='oculta'
// //         });
// //     return 0
// //   }
// // }

// const chequearVictoria = casillas =>{
//   const victoria = casillas.every(casilla=>casilla.estado==='acertada')
// return victoria
// };

// const ordenCartas = () => {
//   const ordenCartas = [];
//   while (ordenCartas.length < 16) {
//     const indice = Math.floor(Math.random() * 16);
//     const disponible = ordenCartas.every((carta) => carta !== indice);
//     if (disponible) {
//       ordenCartas.push(indice);
//     }
//   }
//   return ordenCartas;
// };
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

// const orden = ordenCartas();
// const juegoNuevo =orden.map(casilla=>
//   casilla=juegoDeCartas[casilla]
// )
// const useMemotestGameState = (start) => {
//   const [casillas,setCasillas] = React.useState(juegoNuevo);
//   const [intentos,setIntentos] = React.useState(start)
//   // const [aciertos,setAciertos] = React.useState(0)
//   const juegoTerminado = chequearVictoria(casillas);

//   const seleccionarCarta = (index) =>{
//     if(casillas[index].estado === 'oculta'){
//       casillas[index].estado = 'seleccionada';
//       setCasillas(casillas)}
//       // $cartasSeleccionadas = casillas.filter(carta=>carta.estado==='seleccionada')
//       // if($cartasSeleccionadas.length===2){
//       //   const acierto = chequearPareja($cartasSeleccionadas)
//       //   setAciertos(aciertos+acierto)

//       // }
//       // console.log(juegoTerminado)
//     }

//   // const restart = () => {
//   //   setAciertos(0)
//   //   setIntentos(0)
//   // };

//   return {
//     casillas,
//     juegoDeCartas,
//     juegoTerminado,
//     seleccionarCarta,
//     // restart,
//   };
// };

// const Memotest = () => {
//   const {
//     casillas,
//     // juegoTerminado,
//     seleccionarCarta,
//     // restart,
//   } = useMemotestGameState(0);

//   const casillasPorFila = [];
//   casillasPorFila[0]=  casillas.slice(0, 4)
//   casillasPorFila[1]=  casillas.slice(4, 8)
//   casillasPorFila[2]=  casillas.slice(8, 12)
//   casillasPorFila[3]=  casillas.slice(12)

//   return (
//     <div className="memotest">
//       {casillasPorFila.map((row, indexA) =>
//         <div className="memotest-row" key={"row" + indexA}>
//           {row.map((casilla,indexB) =>
//             <Square
//               src={casilla.src}
//               alt={casilla.id}
//               onClick={() => {
//                 seleccionarCarta(indexA*4+indexB);
//               }}
//               estado={casilla.estado}
//               value={indexA*4+indexB}
//               key={indexA*4+indexB}
//             />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
// export default Memotest;

const Square = ({ value, estado, onClick = () => {} }) => {
  return (
    <div onClick={onClick} id="square" className={estado}>
      {value}
    </div>
  );
};
Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

const WinnerCard = ({ show, winner, onRestart = () => {} }) => {
  return (
    <div className={cx("winner-card", { "winner-card--hidden": !show })}>
      <span className="winner-card-text">
        {winner ? `Player ${winner} has won the game!` : "It's a tie!"}
      </span>
      <FancyButton onClick={onRestart}>Play again?</FancyButton>
    </div>
  );
};

WinnerCard.propTypes = {
  show: PropTypes.bool.isRequired,
  winner: PropTypes.oneOf(["X", "O"]),
  onRestart: PropTypes.func,
};

const getWinner = (tiles) => {
  const winningCombinations = [
    [tiles[0], tiles[1], tiles[2]],
    [tiles[3], tiles[4], tiles[5]],
    [tiles[6], tiles[7], tiles[8]],

    [tiles[0], tiles[3], tiles[6]],
    [tiles[1], tiles[4], tiles[7]],
    [tiles[2], tiles[5], tiles[8]],

    [tiles[0], tiles[4], tiles[8]],
    [tiles[2], tiles[4], tiles[6]],
  ];
  let win = null;
  if (tiles) {
    winningCombinations.forEach((combination) => {
      if (combination.includes("X") || combination.includes("O")) {
        if (
          combination[0] === combination[1] &&
          combination[0] === combination[2]
        ) {
          win = combination[0];
        }
      }
    });
  }
  return win;
};

const useTicTacToeGameState = (initialPlayer) => {
  const [tiles, setTiles] = React.useState(juegoDeCartas);
  const [currentPlayer, setCurrentPlayer] = React.useState(initialPlayer);
  const winner = getWinner(tiles);
  const gameEnded = false;

  const setTileTo = (tileIndex, player) => {
    if (tiles[tileIndex].estado === "oculta") {
      tiles[tileIndex].estado = "hola";
      setTiles(tiles);
      // setCurrentPlayer(player === "X" ? "O" : "X");
    }
  };
  const restart = () => {
    setTiles(["", "", "", "", "", "", "", "", ""]);
    setCurrentPlayer((initialPlayer = "X"));
  };

  return { tiles, currentPlayer, winner, gameEnded, setTileTo, restart };
};

const TicTacToe = () => {
  const { tiles, currentPlayer, winner, gameEnded, setTileTo, restart } =
    useTicTacToeGameState("X");
  const tilesForRow = [];
  tilesForRow[0] = tiles.slice(0, 4);
  tilesForRow[1] = tiles.slice(4, 8);
  tilesForRow[2] = tiles.slice(8, 12);
  tilesForRow[3] = tiles.slice(12);
  console.log(tiles);
  console.log(tilesForRow);
  return (
    <div className="tictactoe">
      <WinnerCard show={gameEnded} winner={winner} onRestart={restart} />
      {tilesForRow.map((row, indexA) => (
        <div key={"row" + indexA} className="tictactoe-row">
          {row.map((tile, indexB) => (
            <Square
              key={indexA * 4 + indexB}
              estado={tile.estado}
              value={tile.id}
              onClick={() => {
                setTileTo(indexA * 4 + indexB, currentPlayer);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default TicTacToe;
