import React from "react";
import "./Controls.css";

export default function Controls(props) {
  return (
    <div className="Controls">
      <div className="ControlRow">
        <div className="slider">
          <p>Rows</p>
          <div className="ControlRow">
            <input
              type="range"
              id="rows"
              name="rows"
              min="3"
              max="25"
              defaultValue={props.rows}
              onInput={() => {
                props.changeRow();
              }}
            ></input>
            <h1>{props.rows}</h1>
          </div>
        </div>
        <div className="slider">
          <p>Columns</p>
          <div className="ControlRow">
            <input
              type="range"
              id="cols"
              name="cols"
              min="3"
              max="25"
              defaultValue={props.cols}
              onInput={() => {
                props.changeCol();
              }}
            ></input>
            <h1>{props.cols}</h1>
          </div>
        </div>
        <div className="slider">
          <p>Population</p>
          <div className="ControlRow">
            <input
              type="range"
              id="pop"
              name="pop"
              min="3"
              max={props.size}
              defaultValue={props.pop}
              onInput={() => {
                props.changePop();
              }}
            ></input>
            <h1>{props.pop}</h1>
          </div>
        </div>
      </div>
      <div className="ControlRow">
        <button
          type="button"
          onClick={() => {
            props.play();
          }}
        >
          Play
        </button>
        <button
          type="button"
          onClick={() => {
            props.pause();
          }}
        >
          Pause
        </button>
      </div>
    </div>
  );
}
