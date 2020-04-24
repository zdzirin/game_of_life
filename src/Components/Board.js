import React from "react";
import "./Board.css";

function Tile(props) {
  if (props.value === 1) {
    return (
      <div
        className="Tile Alive"
        value={props.value}
        onClick={() => props.showNeighbors()}
      ></div>
    );
  } else {
    return (
      <div
        className="Tile"
        value={props.value}
        onClick={() => props.showNeighbors()}
      ></div>
    );
  }
}

export default function Board(props) {
  const matrix = props.matrix;

  function getRow(row, r) {
    return row.map((value, c) => {
      return (
        <Tile
          id={`Tile${r}${c}`}
          value={matrix[r][c]}
          showNeighbors={() => {
            props.showNeighbors(r, c);
          }}
        />
      );
    });
  }

  function getBoard() {
    return matrix.map((row, r) => {
      return <div className="Row">{getRow(row, r)}</div>;
    });
  }

  return <div className="Board">{getBoard()}</div>;
}
