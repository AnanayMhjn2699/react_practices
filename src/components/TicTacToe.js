import { useState } from "react";
import "../styles/TicTacToe.css";

let cellData = ["", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {
  const [isO, setIsO] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const checkIfWon = (index) => {
    const soln = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < soln.length; i++) {
      if (
        cellData[soln[i][0]] &&
        cellData[soln[i][0]] === cellData[soln[i][1]] &&
        cellData[soln[i][1]] === cellData[soln[i][2]]
      )
        return cellData[soln[i][0]];
    }
    //map cannot be used as it does not stops iterating over other elements even when return is encountered
    //thus we used simple for loop or we can even use Array.prototype.some() which can do the required thing
    //soln.some((sol)=>{
    //    return (cellData[sol[0]] &&
    // cellData[sol[0]] === cellData[sol[1]] &&
    //     cellData[sol[1]] === cellData[sol[2]])
    // })
    //this will run over soln only till it returns something and then stops

    // soln.map((sol) => {
    //   console.log(sol);
    //   if (
    //     cellData[sol[0]] &&
    //     cellData[sol[0]] === cellData[sol[1]] &&
    //     cellData[sol[1]] === cellData[sol[2]]
    //   ) {
    //     console.log("in here");
    //     return cellData[sol[0]];
    //   }
    // });
    return null;
  };
  const handleClick = (e) => {
    if (gameOver) return;
    if (cellData[e.target.id] !== "") return;

    // if (isO) document.getElementById(e.target.id).classList.add("O");
    // else document.getElementById(e.target.id).classList.add("X");

    if (isO) document.getElementById(e.target.id).innerHTML = "O";
    else document.getElementById(e.target.id).innerHTML = "X";

    cellData[e.target.id] = isO ? "O" : "X";
    setIsO(!isO);

    if (checkIfWon(e.target.index)) setGameOver(true);
  };
  return (
    <div className="mainDiv">
      <div className="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
          return (
            <div
              key={index}
              id={index}
              className="cell"
              onClick={(e) => handleClick(e)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
