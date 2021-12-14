
import { useEffect, useState } from 'react';
import './App.css';
import Square from './Components/Square';
import './Components/Patterns';
import { Patterns } from './Components/Patterns';

function App() {

  const [board, setBoard] = useState(["","","","","","","","",""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({winner:"none", state:"none"});


    useEffect(() => {
      checkwin();
      checkIfTie();

      if (player == "X") {
        setPlayer("O")
      } else {
        setPlayer("X")
      }
    },[board]);

    useEffect(() => {
      if (result.state != "none") {
        alert(`Game Finshed.. Winning Player: ${result.winner}`);
        restartGame();
      }
      
    }, [result]);

  const chooseSquare = (square) => {
    setBoard(board.map((val, idx) => {
      if (idx == square && val == "") {
        return player
      }
      return val
    }))

    
  };

  const checkwin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer =="") return;
      let foundwinningpattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundwinningpattern = false;

        }
      });
      if (foundwinningpattern) {
        setResult({winner: player, state: "won"})
      }
    })
  }

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });

    if(filled) {

      setResult({winner: "No One", state: "Tie"})

    }

  }

  const restartGame = () => {
    setBoard(["","","","","","","","",""]);
    setPlayer("O")
  }

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={ () => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={ () => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={ () => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
        <Square
            val={board[3]}
            chooseSquare={ () => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={ () => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={ () => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
        <Square
            val={board[6]}
            chooseSquare={ () => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={ () => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={ () => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
