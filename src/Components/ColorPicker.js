import React from "react";
import "./ColorPicker.css";

export default function ColorPicker(props) {
  function generateSwatches() {
    let tmp = [];
    for (let i = 20; i <= 360; i += 40) {
      tmp.push(i);
    }
    return tmp.map((color) => {
      return (
        <button
          type="button"
          className="Swatch"
          style={{
            "background-color": `hsl(${color},80%,75%)`,
          }}
          onClick={() => props.setColor(color)}
        ></button>
      );
    });
  }

  return <div className="ColorPicker">{generateSwatches()}</div>;
}
