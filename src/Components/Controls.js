import React from "react";
import "./Controls.css";

export default function Controls(props) {
  return (
    <div className="Controls">
      <div className="Row ControlRow">
        <div className="slider">
          <p>Rows</p>
          <div className="Row ControlRow">
            <input
              type="range"
              id="rows"
              name="rows"
              min="10"
              max="50"
              defaultValue={props.rows}
              onInput={(event) => {
                props.changeRow(event);
              }}
            ></input>
            <p className="DisplayNumber">{props.rows}</p>
          </div>
        </div>
        <div className="slider">
          <p>Columns</p>
          <div className="Row ControlRow">
            <input
              type="range"
              id="cols"
              name="cols"
              min="10"
              max="50"
              defaultValue={props.cols}
              onInput={(event) => {
                props.changeCol(event);
              }}
            ></input>
            <p className="DisplayNumber">{props.cols}</p>
          </div>
        </div>
        <div className="slider">
          <p>Population</p>
          <div className="Row ControlRow">
            <input
              type="range"
              id="pop"
              name="pop"
              min="3"
              max={props.size}
              defaultValue={props.pop}
              onInput={(event) => {
                props.changePop(event);
              }}
            ></input>
            <p className="DisplayNumber">{props.pop}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
