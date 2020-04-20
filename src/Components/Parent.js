import React from "react";
import Controls from "./Controls";
import Board from "./Board";
import Array2D from "./Array2D";
import { render } from "@testing-library/react";

export default class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: 10,
      cols: 10,
      pop: 33,
      speed: 1000,
      board: new Array2D(10, 10, 33),
    };
  }

  play() {
    alert("play!");
  }

  pause() {
    alert("pause!");
  }

  changeRow() {
    let input = document.getElementById("rows");
    let rows = input.value;
    let size = this.state.cols * rows;
    let pop = this.checkPop(size);
    this.setState({
      rows: input.value,
      pop: pop,
      board: new Array2D(rows, this.state.cols, this.state.pop),
    });
  }

  changeCol() {
    let input = document.getElementById("cols");
    let cols = input.value;
    let size = this.state.rows * cols;
    let pop = this.checkPop(size);
    this.setState({
      cols: input.value,
      pop: pop,
      board: new Array2D(this.state.rows, cols, this.state.pop),
    });
  }

  changePop() {
    let input = document.getElementById("pop");
    this.setState({
      pop: input.value,
      board: new Array2D(this.state.rows, this.state.cols, this.state.pop),
    });
  }

  checkPop(size) {
    if (this.state.pop > size) return size;
    else return this.state.pop;
  }

  render() {
    return (
      <div className="parent">
        <Controls
          size={this.state.cols * this.state.rows}
          rows={this.state.rows}
          cols={this.state.cols}
          pop={this.state.pop}
          changeRow={() => this.changeRow()}
          changeCol={() => this.changeCol()}
          changePop={() => this.changePop()}
          play={() => {
            this.play();
          }}
          pause={() => {
            this.pause();
          }}
        ></Controls>
        <Board matrix={this.state.board.getMatrix()} />
      </div>
    );
  }
}
