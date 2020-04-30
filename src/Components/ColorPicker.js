import React from "react";
import "./ColorPicker.css";

export default function ColorPicker(props) {
  function generateSwatches() {
    let tmp = [];
    for (let i = 0; i <= 360; i += 20) {
      tmp.push(i);
    }
    return tmp.map((color) => {
      return (
        <div
          className="Swatch"
          style={{ "background-color": `hsl(${color},80%,75%)` }}
          onClick={(event) => props.setColor(color, event)}
        ></div>
      );
    });
  }

  return <div className="Row">{generateSwatches()}</div>;
}
