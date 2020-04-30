import React from "react";
import "./Board.css";

function Tile(props) {
  if (props.value === 1) {
    return (
      <div
        className={"Tile Alive"}
        neighbors={props.neighbors}
        onClick={() => showNeighbors()}
      ></div>
    );
  } else {
    return (
      <div
        className="Tile"
        neighbors={props.neighbors}
        onClick={() => showNeighbors()}
      ></div>
    );
  }

  function showNeighbors() {
    alert(props.neighbors);
  }
}

export default function Board(props) {
  function getRow(row, r) {
    return row.map((value, c) => {
      return (
        <Tile
          id={`Tile${r}${c}`}
          value={props.matrix[r][c]}
          neighbors={props.neighbors[r][c]}
        />
      );
    });
  }

  function getBoard() {
    return props.matrix.map((row, r) => {
      return <div className="BoardRow">{getRow(row, r)}</div>;
    });
  }

  return <div className="Board">{getBoard()}</div>;
}
