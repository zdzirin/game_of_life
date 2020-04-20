import React from "react";
import "./Board.css";

function Tile(props) {
  if (props.value === 1) {
    return <div className="Tile Alive" value={props.value}></div>;
  } else {
    return <div className="Tile" value={props.value}></div>;
  }
}

export default function Board(props) {
  const matrix = props.matrix;

  function getRow(row, r) {
    return row.map((value, c) => {
      return <Tile value={matrix[r][c]} />;
    });
  }

  function getBoard() {
    return matrix.map((row, r) => {
      return <div className="Row">{getRow(row, r)}</div>;
    });
  }

  return <div className="Board">{getBoard()}</div>;
}
