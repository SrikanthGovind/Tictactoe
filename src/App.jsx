import Player from "./Player";
import Gameboard from "./Gameboard";
import { useState } from "react";
import Log from "./Log";
import { Winning } from "./Winning";
import Gameover from "./Gameover";

let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [log, setlog] = useState([]);
  const [playername, setplayername] = useState({
    X: "Palyer1",
    O: "Player2",
  });

  function checkactiveplayer() {
    let currplayersymbol = "X";
    if (log.length > 0 && log[0].currplayer === "X") {
      currplayersymbol = "O";
    }
    return currplayersymbol;
  }

  let activeplayer = checkactiveplayer();

  function handlesquareclick(rowindex, colindex) {
    setlog((prev) => {
      let currplayersymbol = checkactiveplayer();
      const updateprev = [
        {
          square: { row: rowindex, col: colindex },
          currplayer: currplayersymbol,
        },
        ...prev,
      ];
      return updateprev;
    });
  }

  let winner;
  let gameboard = [...board.map((ele) => [...ele])];

  for (let logs of log) {
    const { square, currplayer } = logs;
    const { row, col } = square;
    gameboard[row][col] = currplayer;
  }

  for (const combination of Winning) {
    let firstsquare = gameboard[combination[0].row][combination[0].column];
    let secondsquare = gameboard[combination[1].row][combination[1].column];
    let thirdsquare = gameboard[combination[2].row][combination[2].column];

    if (
      firstsquare &&
      firstsquare === secondsquare &&
      firstsquare === thirdsquare
    ) {
      winner = playername[firstsquare];
    }
  }
  let hasdraw = log.length === 9 && !winner;

  function handlerestart() {
    setlog([]);
  }

  function handleplayername(symbol, newname) {
    setplayername((prev) => {
      return { ...prev, [symbol]: newname };
    });
  }

  return (
    <>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            player="Player1"
            symbol="X"
            isactive={activeplayer === "X"}
            onhandleplayername={handleplayername}
          />
          <Player
            player="Player2"
            symbol="O"
            isactive={activeplayer === "O"}
            onhandleplayername={handleplayername}
          />
        </ol>
        {(winner || hasdraw) && (
          <Gameover playerwinner={winner} onhandlerestart={handlerestart} />
        )}
        <Gameboard updatedboard={gameboard} handlesquare={handlesquareclick} />
      </div>
      <Log activelog={log} />
    </>
  );
}

export default App;
